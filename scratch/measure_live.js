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

async function runAudit() {
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9225",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,1200",
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const targets = await getJson("http://127.0.0.1:9225/json/list");
    const pageTarget = targets.find((t) => t.type === "page") || targets[0];

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((r) => ws.on("open", r));

    let msgId = 1;
    await sendCommand(ws, msgId++, "Page.enable");
    await sendCommand(ws, msgId++, "Runtime.enable");
    await sendCommand(ws, msgId++, "DOM.enable");
    await sendCommand(ws, msgId++, "CSS.enable");

    // Desktop
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false,
    });

    console.log("Navigating to https://nivasfpv.in/ ...");
    await sendCommand(ws, msgId++, "Page.navigate", { url: "https://nivasfpv.in/" });
    await new Promise((r) => setTimeout(r, 5000));

    // Audit 1: Measure Desktop About -> Work spacing
    const desktopSpacing = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const readBioLink = Array.from(document.querySelectorAll('#about a')).find(a => a.textContent.includes('Read Full Bio') || a.textContent.includes('READ FULL BIO'));
        const bioRect = readBioLink ? readBioLink.getBoundingClientRect() : null;
        const bioBottom = bioRect ? (bioRect.bottom + window.scrollY) : 0;
        
        const workHeading = document.querySelector('#work .heading-lg') || document.querySelector('#work h2') || document.querySelector('#work span');
        const workHeadingRect = workHeading ? workHeading.getBoundingClientRect() : null;
        const workHeadingTop = workHeadingRect ? (workHeadingRect.top + window.scrollY) : 0;
        
        const workSection = document.getElementById('work');
        const workRect = workSection ? workSection.getBoundingClientRect() : null;
        const workTop = workRect ? (workRect.top + window.scrollY) : 0;
        
        const divider = document.querySelector('.section-divider, [class*="SectionDivider"]');
        
        return {
          viewportWidth: window.innerWidth,
          readBioBottom: bioBottom,
          workSectionTop: workTop,
          firstVisibleWorkContentTop: workHeadingTop,
          distanceBioToWorkSection: workTop - bioBottom,
          distanceBioToFirstVisibleWorkContent: workHeadingTop - bioBottom,
          dividerExists: !!divider,
        };
      })()`,
      returnByValue: true,
    });

    console.log("Desktop About -> SelectedWork Spacing:", JSON.stringify(desktopSpacing.result.value, null, 2));

    // Audit 2: Hero -> About Spacing (Confirm Unchanged)
    const heroAboutSpacing = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const hero = document.getElementById('hero');
        const heroRect = hero ? hero.getBoundingClientRect() : null;
        const heroBottom = heroRect ? (heroRect.bottom + window.scrollY) : 0;
        
        const aboutImg = document.querySelector('#about img');
        const aboutImgRect = aboutImg ? aboutImg.getBoundingClientRect() : null;
        const aboutImgTop = aboutImgRect ? (aboutImgRect.top + window.scrollY) : 0;
        
        return {
          heroBottom,
          aboutImgTop,
          heroToAboutDistance: aboutImgTop - heroBottom,
        };
      })()`,
      returnByValue: true,
    });

    console.log("Hero -> About Spacing:", JSON.stringify(heroAboutSpacing.result.value, null, 2));

    // Audit 3: Video Loop & Playback Audit
    const videoLoopAudit = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const heroVideo = document.querySelector('#hero video');
        const flightVideos = Array.from(document.querySelectorAll('#flight-to-frame video'));
        const workVideos = Array.from(document.querySelectorAll('#work video'));
        
        return {
          hero: {
            loop: heroVideo.loop,
            muted: heroVideo.muted,
            paused: heroVideo.paused,
            opacity: window.getComputedStyle(heroVideo).opacity,
          },
          flightVideos: flightVideos.map(v => ({
            src: (v.currentSrc || v.src).split('/').pop(),
            loop: v.loop,
            muted: v.muted,
            opacity: window.getComputedStyle(v).opacity,
          })),
          workVideosCount: workVideos.length,
          allWorkVideosLoop: workVideos.every(v => v.loop === true),
          allWorkVideosOpacity1: workVideos.every(v => window.getComputedStyle(v).opacity === '1'),
        };
      })()`,
      returnByValue: true,
    });

    console.log("Video Elements Loop Status:", JSON.stringify(videoLoopAudit.result.value, null, 2));

    // Capture Desktop Screenshot around About -> Work transition
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const readBio = Array.from(document.querySelectorAll('#about a')).find(a => a.textContent.includes('Read Full Bio') || a.textContent.includes('READ FULL BIO'));
        if (readBio) {
          const rect = readBio.getBoundingClientRect();
          window.scrollTo(0, window.scrollY + rect.top - 120);
        }
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1200));

    const aboutWorkScreenshot = await sendCommand(ws, msgId++, "Page.captureScreenshot", {
      format: "png",
    });
    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, "live_desktop_about_to_work.png"),
      Buffer.from(aboutWorkScreenshot.data, "base64")
    );
    console.log("Saved screenshot to live_desktop_about_to_work.png");

    // Capture Flight to Frame Screenshot
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const f2f = document.getElementById('flight-to-frame');
        if (f2f) f2f.scrollIntoView();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1500));

    const f2fScreenshot = await sendCommand(ws, msgId++, "Page.captureScreenshot", {
      format: "png",
    });
    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, "live_desktop_flight_to_frame.png"),
      Buffer.from(f2fScreenshot.data, "base64")
    );
    console.log("Saved screenshot to live_desktop_flight_to_frame.png");

    // Mobile Audit
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
    await new Promise((r) => setTimeout(r, 2000));

    const mobileSpacing = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const readBioLink = Array.from(document.querySelectorAll('#about a')).find(a => a.textContent.includes('Read Full Bio') || a.textContent.includes('READ FULL BIO'));
        const bioRect = readBioLink ? readBioLink.getBoundingClientRect() : null;
        const bioBottom = bioRect ? (bioRect.bottom + window.scrollY) : 0;
        
        const workHeading = document.querySelector('#work .heading-lg') || document.querySelector('#work h2') || document.querySelector('#work span');
        const workHeadingRect = workHeading ? workHeading.getBoundingClientRect() : null;
        const workHeadingTop = workHeadingRect ? (workHeadingRect.top + window.scrollY) : 0;
        
        const workSection = document.getElementById('work');
        const workRect = workSection ? workSection.getBoundingClientRect() : null;
        const workTop = workRect ? (workRect.top + window.scrollY) : 0;
        
        return {
          viewportWidth: window.innerWidth,
          readBioBottom: bioBottom,
          workSectionTop: workTop,
          firstVisibleWorkContentTop: workHeadingTop,
          distanceBioToWorkSection: workTop - bioBottom,
          distanceBioToFirstVisibleWorkContent: workHeadingTop - bioBottom,
        };
      })()`,
      returnByValue: true,
    });

    console.log("Mobile About -> SelectedWork Spacing:", JSON.stringify(mobileSpacing.result.value, null, 2));

    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const readBio = Array.from(document.querySelectorAll('#about a')).find(a => a.textContent.includes('Read Full Bio') || a.textContent.includes('READ FULL BIO'));
        if (readBio) {
          const rect = readBio.getBoundingClientRect();
          window.scrollTo(0, window.scrollY + rect.top - 100);
        }
      })()`,
    });
    await new Promise((r) => setTimeout(r, 1200));

    const mobileScreenshot = await sendCommand(ws, msgId++, "Page.captureScreenshot", {
      format: "png",
    });
    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, "live_mobile_about_to_work.png"),
      Buffer.from(mobileScreenshot.data, "base64")
    );
    console.log("Saved screenshot to live_mobile_about_to_work.png");

    ws.close();
  } finally {
    chrome.kill();
  }
}

runAudit().catch(console.error);
