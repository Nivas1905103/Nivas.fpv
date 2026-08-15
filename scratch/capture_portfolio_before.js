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

async function captureBefore() {
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9249",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,1080",
  ]);
  await new Promise((r) => setTimeout(r, 1500));
  try {
    const targets = await getJson("http://127.0.0.1:9249/json/list");
    const pageTarget = targets.find((t) => t.type === "page") || targets[0];
    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((r) => ws.on("open", r));

    let msgId = 1;
    await sendCommand(ws, msgId++, "Page.enable");
    await sendCommand(ws, msgId++, "Runtime.enable");

    // 1. Homepage Selected Work Desktop
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 1080,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await sendCommand(ws, msgId++, "Page.navigate", { url: "http://localhost:3000/#work" });
    await new Promise((r) => setTimeout(r, 2000));
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById("work")?.scrollIntoView({ behavior: "instant", block: "start" });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const hwDesktop = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "selectedwork_before_desktop.png"), Buffer.from(hwDesktop.data, "base64"));

    // 2. /work Desktop
    await sendCommand(ws, msgId++, "Page.navigate", { url: "http://localhost:3000/work" });
    await new Promise((r) => setTimeout(r, 2000));
    const workDesktop = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "workpage_before_desktop.png"), Buffer.from(workDesktop.data, "base64"));

    // 3. Homepage Selected Work Mobile
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true,
    });
    await sendCommand(ws, msgId++, "Page.navigate", { url: "http://localhost:3000/#work" });
    await new Promise((r) => setTimeout(r, 2000));
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById("work")?.scrollIntoView({ behavior: "instant", block: "start" });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const hwMobile = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "selectedwork_before_mobile.png"), Buffer.from(hwMobile.data, "base64"));

    // 4. /work Mobile
    await sendCommand(ws, msgId++, "Page.navigate", { url: "http://localhost:3000/work" });
    await new Promise((r) => setTimeout(r, 2000));
    const workMobile = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "workpage_before_mobile.png"), Buffer.from(workMobile.data, "base64"));

    ws.close();
  } finally {
    chrome.kill();
  }
}

captureBefore().catch(console.error);
