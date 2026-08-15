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

async function captureWhyFPVAfter() {
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9236",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,1200",
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const targets = await getJson("http://127.0.0.1:9236/json/list");
    const pageTarget = targets.find((t) => t.type === "page") || targets[0];

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((r) => ws.on("open", r));

    let msgId = 1;
    await sendCommand(ws, msgId++, "Page.enable");
    await sendCommand(ws, msgId++, "Runtime.enable");

    // 1. Desktop Capture
    console.log("Capturing Desktop WhyFPV...");
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 1080,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await sendCommand(ws, msgId++, "Page.navigate", { url: "http://localhost:3000/#why-fpv" });
    await new Promise((r) => setTimeout(r, 3000));

    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `
        const el = document.getElementById('why-fpv');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      `
    });
    await new Promise((r) => setTimeout(r, 1500));

    const desktopShot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "whyfpv_after_desktop.png"), Buffer.from(desktopShot.data, "base64"));

    // Scroll down to capture the bento cards + CTA on desktop
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `window.scrollBy({ top: 550, behavior: 'instant' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const desktopBentoShot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "whyfpv_after_desktop_bento.png"), Buffer.from(desktopBentoShot.data, "base64"));

    // 2. Tablet Capture (820 x 1180)
    console.log("Capturing Tablet WhyFPV...");
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 820,
      height: 1180,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await sendCommand(ws, msgId++, "Page.navigate", { url: "http://localhost:3000/#why-fpv" });
    await new Promise((r) => setTimeout(r, 3000));
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `
        const el = document.getElementById('why-fpv');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      `
    });
    await new Promise((r) => setTimeout(r, 1500));

    const tabletShot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "whyfpv_after_tablet.png"), Buffer.from(tabletShot.data, "base64"));

    // 3. Mobile Capture (390 x 844)
    console.log("Capturing Mobile WhyFPV...");
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true,
    });
    await sendCommand(ws, msgId++, "Page.navigate", { url: "http://localhost:3000/#why-fpv" });
    await new Promise((r) => setTimeout(r, 3000));
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `
        const el = document.getElementById('why-fpv');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      `
    });
    await new Promise((r) => setTimeout(r, 1500));

    const mobileShot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "whyfpv_after_mobile.png"), Buffer.from(mobileShot.data, "base64"));

    ws.close();
  } finally {
    chrome.kill();
  }
}

captureWhyFPVAfter().catch(console.error);
