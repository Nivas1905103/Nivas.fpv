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

async function captureHomeAbout() {
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9245",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,1200",
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const targets = await getJson("http://127.0.0.1:9245/json/list");
    const pageTarget = targets.find((t) => t.type === "page") || targets[0];

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((r) => ws.on("open", r));

    let msgId = 1;
    await sendCommand(ws, msgId++, "Page.enable");
    await sendCommand(ws, msgId++, "Runtime.enable");

    // ──────────────────────────────────────────
    // 1. DESKTOP VIEW (1440x1080)
    // ──────────────────────────────────────────
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 1080,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await sendCommand(ws, msgId++, "Page.navigate", { url: "http://localhost:3000/" });
    await new Promise((r) => setTimeout(r, 3000));

    // 1. Home About Identity Desktop
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('about')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1200));
    const homeAbout1 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "homepage_about_desktop_identity.png"), Buffer.from(homeAbout1.data, "base64"));

    // 2. Home About Story & Disciplines Desktop
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `window.scrollBy({ top: 600, behavior: 'instant' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const homeAbout2 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "homepage_about_desktop_story_disciplines.png"), Buffer.from(homeAbout2.data, "base64"));

    // ──────────────────────────────────────────
    // 2. MOBILE VIEW (390x844)
    // ──────────────────────────────────────────
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true,
    });
    await new Promise((r) => setTimeout(r, 800));

    // Mobile Home About Identity
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('about')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const homeAboutMob1 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "homepage_about_mobile_identity.png"), Buffer.from(homeAboutMob1.data, "base64"));

    // Mobile Home About Story & CTA
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `window.scrollBy({ top: 650, behavior: 'instant' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const homeAboutMob2 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "homepage_about_mobile_story_cta.png"), Buffer.from(homeAboutMob2.data, "base64"));

    ws.close();
  } finally {
    chrome.kill();
  }
}

captureHomeAbout().catch(console.error);
