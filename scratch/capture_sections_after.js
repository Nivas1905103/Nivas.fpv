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

async function captureSectionsAfter() {
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9242",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,1200",
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const targets = await getJson("http://127.0.0.1:9242/json/list");
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
    await sendCommand(ws, msgId++, "Page.navigate", { url: "http://localhost:3000/#services" });
    await new Promise((r) => setTimeout(r, 2500));

    // 1. Services After
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('services')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const servicesShot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "services_after_desktop.png"), Buffer.from(servicesShot.data, "base64"));

    // 2. FlightToFrame After
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('flight-to-frame')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const f2fShot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "flighttoframe_after_desktop.png"), Buffer.from(f2fShot.data, "base64"));

    // 3. Capabilities After
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('capabilities')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const capShot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "capabilities_after_desktop.png"), Buffer.from(capShot.data, "base64"));

    // 4. Availability After
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('availability')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const availShot = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "availability_after_desktop.png"), Buffer.from(availShot.data, "base64"));

    // ──────────────────────────────────────────
    // 2. MOBILE VIEW (390x844)
    // ──────────────────────────────────────────
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true,
    });
    await new Promise((r) => setTimeout(r, 500));

    // Services Mobile
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('services')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 800));
    const servicesMob = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "services_after_mobile.png"), Buffer.from(servicesMob.data, "base64"));

    // FlightToFrame Mobile
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('flight-to-frame')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 800));
    const f2fMob = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "flighttoframe_after_mobile.png"), Buffer.from(f2fMob.data, "base64"));

    // Capabilities Mobile
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('capabilities')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 800));
    const capMob = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "capabilities_after_mobile.png"), Buffer.from(capMob.data, "base64"));

    // Availability Mobile
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('availability')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 800));
    const availMob = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "availability_after_mobile.png"), Buffer.from(availMob.data, "base64"));

    ws.close();
  } finally {
    chrome.kill();
  }
}

captureSectionsAfter().catch(console.error);
