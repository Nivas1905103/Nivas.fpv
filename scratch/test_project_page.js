const { spawn } = require("child_process");
const http = require("http");
const WebSocket = require("ws");
const fs = require("fs");
const path = require("path");

const ARTIFACTS_DIR = "/Users/nivassanmugam/.gemini/antigravity-ide/brain/4c22a5d6-08a1-414b-a67b-b8edb7c2a842";

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(JSON.parse(data)));
    }).on("error", reject);
  });
}

function sendCommand(ws, id, method, params = {}) {
  return new Promise((resolve, reject) => {
    const handler = (data) => {
      const msg = JSON.parse(data);
      if (msg.id === id) {
        ws.off("message", handler);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
    ws.on("message", handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function auditProjectPage() {
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9227",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,1200",
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const targets = await getJson("http://127.0.0.1:9227/json/list");
    const pageTarget = targets.find((t) => t.type === "page") || targets[0];

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((r) => ws.on("open", r));

    let msgId = 1;
    await sendCommand(ws, msgId++, "Page.enable");
    await sendCommand(ws, msgId++, "Runtime.enable");

    // 1. Desktop Test
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false,
    });

    console.log("Navigating to https://nivasfpv.in/work/chase-the-moment ...");
    await sendCommand(ws, msgId++, "Page.navigate", { url: "https://nivasfpv.in/work/chase-the-moment" });
    
    // Wait for video playback to start
    await new Promise((r) => setTimeout(r, 4000));

    const heroAudit = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const heroSection = document.querySelector('section');
        const heroVideo = heroSection ? heroSection.querySelector('video') : null;
        const posterImg = heroSection ? heroSection.querySelector('img') : null;
        const h1 = document.querySelector('h1');
        const h1Rect = h1 ? h1.getBoundingClientRect() : null;
        const heroRect = heroSection ? heroSection.getBoundingClientRect() : null;
        
        return {
          viewportWidth: window.innerWidth,
          heroSectionHeight: heroRect ? heroRect.height : 0,
          video: heroVideo ? {
            src: heroVideo.currentSrc || heroVideo.src,
            loop: heroVideo.loop,
            muted: heroVideo.muted,
            paused: heroVideo.paused,
            currentTime: heroVideo.currentTime,
            opacity: window.getComputedStyle(heroVideo).opacity,
            zIndex: window.getComputedStyle(heroVideo).zIndex,
          } : null,
          poster: posterImg ? {
            src: posterImg.src,
            opacity: window.getComputedStyle(posterImg).opacity,
          } : null,
          title: h1 ? {
            text: h1.textContent,
            top: h1Rect.top,
            bottom: h1Rect.bottom,
            height: h1Rect.height,
            distanceFromHeroBottom: heroRect.bottom - h1Rect.bottom,
          } : null,
        };
      })()`,
      returnByValue: true,
    });

    console.log("Desktop Project Hero Audit (Playing naturally):", JSON.stringify(heroAudit.result.value, null, 2));

    // Capture Desktop Screenshot while video is playing naturally
    const desktopScreenshot = await sendCommand(ws, msgId++, "Page.captureScreenshot", {
      format: "png",
    });
    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, "live_desktop_project_hero.png"),
      Buffer.from(desktopScreenshot.data, "base64")
    );
    console.log("Saved screenshot to live_desktop_project_hero.png");

    // 2. Mobile Test (390px)
    console.log("Testing Mobile Viewport (390px)...");
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true,
    });

    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `window.scrollTo(0, 0);`,
    });
    await new Promise((r) => setTimeout(r, 3000));

    const mobileHeroAudit = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const heroSection = document.querySelector('section');
        const heroVideo = heroSection ? heroSection.querySelector('video') : null;
        const posterImg = heroSection ? heroSection.querySelector('img') : null;
        const h1 = document.querySelector('h1');
        const h1Rect = h1 ? h1.getBoundingClientRect() : null;
        const heroRect = heroSection ? heroSection.getBoundingClientRect() : null;
        
        return {
          viewportWidth: window.innerWidth,
          heroSectionHeight: heroRect ? heroRect.height : 0,
          video: heroVideo ? {
            loop: heroVideo.loop,
            muted: heroVideo.muted,
            paused: heroVideo.paused,
            currentTime: heroVideo.currentTime,
            opacity: window.getComputedStyle(heroVideo).opacity,
          } : null,
          poster: posterImg ? posterImg.src : null,
          title: h1 ? {
            text: h1.textContent,
            top: h1Rect.top,
            bottom: h1Rect.bottom,
            height: h1Rect.height,
            distanceFromHeroBottom: heroRect.bottom - h1Rect.bottom,
          } : null,
        };
      })()`,
      returnByValue: true,
    });

    console.log("Mobile Project Hero Audit:", JSON.stringify(mobileHeroAudit.result.value, null, 2));

    const mobileScreenshot = await sendCommand(ws, msgId++, "Page.captureScreenshot", {
      format: "png",
    });
    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, "live_mobile_project_hero.png"),
      Buffer.from(mobileScreenshot.data, "base64")
    );
    console.log("Saved screenshot to live_mobile_project_hero.png");

    ws.close();
  } finally {
    chrome.kill();
  }
}

auditProjectPage().catch(console.error);
