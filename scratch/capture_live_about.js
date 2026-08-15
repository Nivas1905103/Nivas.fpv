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

async function captureLiveAbout() {
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9240",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,1200",
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const targets = await getJson("http://127.0.0.1:9240/json/list");
    const pageTarget = targets.find((t) => t.type === "page") || targets[0];

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((r) => ws.on("open", r));

    let msgId = 1;
    await sendCommand(ws, msgId++, "Page.enable");
    await sendCommand(ws, msgId++, "Runtime.enable");

    // 1. Desktop Capture (1440 x 1080)
    console.log("Capturing Live Desktop About...");
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 1080,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await sendCommand(ws, msgId++, "Page.navigate", { url: "https://nivasfpv.in/about" });
    await new Promise((r) => setTimeout(r, 3500));

    const desktopShot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "live_about_redesign_desktop.png"), Buffer.from(desktopShot.data, "base64"));

    // Scroll to Bento
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `window.scrollBy({ top: 1200, behavior: 'instant' });`
    });
    await new Promise((r) => setTimeout(r, 1500));
    const bentoShot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "live_about_redesign_bento.png"), Buffer.from(bentoShot.data, "base64"));

    // 2. Mobile Capture (390 x 844)
    console.log("Capturing Live Mobile About...");
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true,
    });
    await sendCommand(ws, msgId++, "Page.navigate", { url: "https://nivasfpv.in/about" });
    await new Promise((r) => setTimeout(r, 3500));

    const mobileShot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "live_about_redesign_mobile.png"), Buffer.from(mobileShot.data, "base64"));

    ws.close();
  } finally {
    chrome.kill();
  }
}

captureLiveAbout().catch(console.error);
