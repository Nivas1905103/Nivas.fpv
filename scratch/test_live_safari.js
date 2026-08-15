const { spawn } = require("child_process");
const http = require("http");
const https = require("https");
const WebSocket = require("ws");
const fs = require("fs");
const path = require("path");

const ARTIFACTS_DIR = "/Users/nivassanmugam/.gemini/antigravity-ide/brain/4c22a5d6-08a1-414b-a67b-b8edb7c2a842";

const IPHONE_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";
const IPAD_UA =
  "Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(JSON.parse(data)));
    }).on("error", reject);
  });
}

function checkHttpRangeSupport(videoUrl) {
  return new Promise((resolve) => {
    https
      .request(
        videoUrl,
        {
          method: "HEAD",
          headers: { Range: "bytes=0-1024" },
        },
        (res) => {
          resolve({
            statusCode: res.statusCode,
            contentType: res.headers["content-type"],
            acceptRanges: res.headers["accept-ranges"],
            contentRange: res.headers["content-range"],
          });
        }
      )
      .on("error", (err) => resolve({ error: err.message }))
      .end();
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

async function runLiveSafariAudit() {
  console.log("\n1. Testing HTTP Byte-Range and Content-Type on Live Video URLs...");
  const sampleVideos = [
    "https://nivasfpv.in/videos/13.mp4",
    "https://nivasfpv.in/videos/10.mp4",
    "https://nivasfpv.in/videos/11.mp4",
    "https://nivasfpv.in/videos/12.mp4",
    "https://nivasfpv.in/videos/1.mp4",
  ];

  for (const url of sampleVideos) {
    const res = await checkHttpRangeSupport(url);
    console.log(`- ${url}: HTTP ${res.statusCode} | Content-Type: ${res.contentType} | Accept-Ranges: ${res.acceptRanges}`);
  }

  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9231",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,1200",
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const targets = await getJson("http://127.0.0.1:9231/json/list");
    const pageTarget = targets.find((t) => t.type === "page") || targets[0];

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((r) => ws.on("open", r));

    let msgId = 1;
    await sendCommand(ws, msgId++, "Page.enable");
    await sendCommand(ws, msgId++, "Runtime.enable");
    await sendCommand(ws, msgId++, "Network.enable");

    // ==========================================
    // 2. iPhone Safari Emulation (390 x 844)
    // ==========================================
    console.log("\n2. Running iPhone Safari Emulation on Live Homepage...");
    await sendCommand(ws, msgId++, "Network.setUserAgentOverride", {
      userAgent: IPHONE_UA,
      platform: "iPhone",
    });
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true,
    });

    await sendCommand(ws, msgId++, "Page.navigate", { url: "https://nivasfpv.in/" });
    await new Promise((r) => setTimeout(r, 4500));

    const iphoneHomeAudit = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const heroVideo = document.querySelector('#hero video');
        const workVideos = Array.from(document.querySelectorAll('#work video'));
        const f2fVideos = Array.from(document.querySelectorAll('#flight-to-frame video'));
        
        return {
          device: "iPhone Safari (390x844)",
          heroVideo: heroVideo ? {
            src: heroVideo.currentSrc || heroVideo.src,
            paused: heroVideo.paused,
            muted: heroVideo.muted,
            currentTime: heroVideo.currentTime,
            poster: heroVideo.poster,
            playsInline: heroVideo.playsInline,
          } : null,
          workVideos: workVideos.map(v => ({
            src: (v.currentSrc || v.src).split('/').pop(),
            currentTime: v.currentTime,
            paused: v.paused,
            loop: v.loop,
          })),
          f2fVideos: f2fVideos.map(v => ({
            src: (v.currentSrc || v.src).split('/').pop(),
            currentTime: v.currentTime,
            paused: v.paused,
            loop: v.loop,
          })),
        };
      })()`,
      returnByValue: true,
    });
    console.log("iPhone Safari Homepage Audit:", JSON.stringify(iphoneHomeAudit.result.value, null, 2));

    const iphoneScreenshot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, "live_iphone_safari_hero.png"),
      Buffer.from(iphoneScreenshot.data, "base64")
    );

    // ==========================================
    // 3. iPad Safari Emulation (820 x 1180)
    // ==========================================
    console.log("\n3. Running iPad Safari Emulation on Live Work Detail (/work/chase-the-moment)...");
    await sendCommand(ws, msgId++, "Network.setUserAgentOverride", {
      userAgent: IPAD_UA,
      platform: "iPad",
    });
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 820,
      height: 1180,
      deviceScaleFactor: 2,
      mobile: true,
    });

    await sendCommand(ws, msgId++, "Page.navigate", { url: "https://nivasfpv.in/work/chase-the-moment" });
    await new Promise((r) => setTimeout(r, 4500));

    const ipadProjectAudit = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const heroVideo = document.querySelector('section video');
        const finalVideo = document.querySelector('article video:not(section video)');
        return {
          device: "iPad Safari (820x1180)",
          heroVideo: heroVideo ? {
            src: heroVideo.currentSrc || heroVideo.src,
            currentTime: heroVideo.currentTime,
            paused: heroVideo.paused,
            muted: heroVideo.muted,
            poster: heroVideo.poster,
            playsInline: heroVideo.playsInline,
          } : null,
          finalVideo: finalVideo ? {
            src: finalVideo.currentSrc || finalVideo.src,
            controls: finalVideo.controls,
            poster: finalVideo.poster,
          } : null,
        };
      })()`,
      returnByValue: true,
    });
    console.log("iPad Safari Project Detail Audit:", JSON.stringify(ipadProjectAudit.result.value, null, 2));

    const ipadScreenshot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, "live_ipad_safari_project.png"),
      Buffer.from(ipadScreenshot.data, "base64")
    );

    // ==========================================
    // 4. Desktop Safari Emulation (1440 x 900)
    // ==========================================
    console.log("\n4. Running Desktop Safari Emulation on /work/vertical-rise...");
    await sendCommand(ws, msgId++, "Network.setUserAgentOverride", {
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
      platform: "MacIntel",
    });
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false,
    });

    await sendCommand(ws, msgId++, "Page.navigate", { url: "https://nivasfpv.in/work/vertical-rise" });
    await new Promise((r) => setTimeout(r, 4500));

    const desktopProjectAudit = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const heroVideo = document.querySelector('section video');
        return {
          device: "Desktop Safari (1440x900)",
          heroVideo: heroVideo ? {
            src: heroVideo.currentSrc || heroVideo.src,
            currentTime: heroVideo.currentTime,
            paused: heroVideo.paused,
            muted: heroVideo.muted,
            poster: heroVideo.poster,
          } : null,
        };
      })()`,
      returnByValue: true,
    });
    console.log("Desktop Safari Vertical Rise Audit:", JSON.stringify(desktopProjectAudit.result.value, null, 2));

    const desktopScreenshot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, "live_desktop_safari_vertical_rise.png"),
      Buffer.from(desktopScreenshot.data, "base64")
    );

    ws.close();
  } finally {
    chrome.kill();
  }
}

runLiveSafariAudit().catch(console.error);
