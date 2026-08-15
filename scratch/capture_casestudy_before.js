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

async function captureCasestudyBefore() {
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9252",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,1080",
  ]);
  await new Promise((r) => setTimeout(r, 1500));
  try {
    const targets = await getJson("http://127.0.0.1:9252/json/list");
    const pageTarget = targets.find((t) => t.type === "page") || targets[0];
    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((r) => ws.on("open", r));

    let msgId = 1;
    await sendCommand(ws, msgId++, "Page.enable");
    await sendCommand(ws, msgId++, "Runtime.enable");

    // 1. Desktop Case Study Before
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 1080,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await sendCommand(ws, msgId++, "Page.navigate", { url: "http://localhost:3000/work/chase-the-moment" });
    await new Promise((r) => setTimeout(r, 2000));
    const csDesktop = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "casestudy_before_desktop.png"), Buffer.from(csDesktop.data, "base64"));

    // Scroll to see details
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `window.scrollBy({ top: 600, behavior: "instant" });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const csDesktopDetails = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "casestudy_before_desktop_details.png"), Buffer.from(csDesktopDetails.data, "base64"));

    // 2. Mobile Case Study Before
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true,
    });
    await sendCommand(ws, msgId++, "Page.navigate", { url: "http://localhost:3000/work/chase-the-moment" });
    await new Promise((r) => setTimeout(r, 2000));
    const csMobile = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "casestudy_before_mobile.png"), Buffer.from(csMobile.data, "base64"));

    ws.close();
  } finally {
    chrome.kill();
  }
}

captureCasestudyBefore().catch(console.error);
