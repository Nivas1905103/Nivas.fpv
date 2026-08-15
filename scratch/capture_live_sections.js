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

async function captureLiveSections() {
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9243",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,1200",
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const targets = await getJson("http://127.0.0.1:9243/json/list");
    const pageTarget = targets.find((t) => t.type === "page") || targets[0];

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((r) => ws.on("open", r));

    let msgId = 1;
    await sendCommand(ws, msgId++, "Page.enable");
    await sendCommand(ws, msgId++, "Runtime.enable");

    // ──────────────────────────────────────────
    // 1. LIVE DESKTOP VIEW (1440x1080)
    // ──────────────────────────────────────────
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 1080,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await sendCommand(ws, msgId++, "Page.navigate", { url: "https://nivasfpv.in/" });
    await new Promise((r) => setTimeout(r, 3500));

    // 1. Live Services Desktop
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('services')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1200));
    const liveServices = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "live_services_desktop.png"), Buffer.from(liveServices.data, "base64"));

    // 2. Live FlightToFrame Desktop
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('flight-to-frame')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1200));
    const liveF2F = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "live_flighttoframe_desktop.png"), Buffer.from(liveF2F.data, "base64"));

    // 3. Live Capabilities Desktop
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('capabilities')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1200));
    const liveCap = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "live_capabilities_desktop.png"), Buffer.from(liveCap.data, "base64"));

    // 4. Live Availability Desktop
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('availability')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1200));
    const liveAvail = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "live_availability_desktop.png"), Buffer.from(liveAvail.data, "base64"));

    // ──────────────────────────────────────────
    // 2. LIVE MOBILE VIEW (390x844)
    // ──────────────────────────────────────────
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true,
    });
    await new Promise((r) => setTimeout(r, 800));

    // Services Mobile
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('services')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const liveServicesMob = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "live_services_mobile.png"), Buffer.from(liveServicesMob.data, "base64"));

    // FlightToFrame Mobile
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('flight-to-frame')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const liveF2FMob = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "live_flighttoframe_mobile.png"), Buffer.from(liveF2FMob.data, "base64"));

    // Capabilities Mobile
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('capabilities')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const liveCapMob = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "live_capabilities_mobile.png"), Buffer.from(liveCapMob.data, "base64"));

    // Availability Mobile
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('availability')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const liveAvailMob = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "live_availability_mobile.png"), Buffer.from(liveAvailMob.data, "base64"));

    ws.close();
  } finally {
    chrome.kill();
  }
}

captureLiveSections().catch(console.error);
