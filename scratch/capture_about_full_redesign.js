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

async function captureAbout() {
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9244",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,1200",
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const targets = await getJson("http://127.0.0.1:9244/json/list");
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
    await sendCommand(ws, msgId++, "Page.navigate", { url: "http://localhost:3000/about" });
    await new Promise((r) => setTimeout(r, 3000));

    // 1. Hero to Background transition
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `window.scrollTo({ top: 350, behavior: 'instant' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const shot1 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "about_hero_to_background_transition.png"), Buffer.from(shot1.data, "base64"));

    // 2. Approach Section
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('approach')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const shot2 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "about_middle_approach.png"), Buffer.from(shot2.data, "base64"));

    // 3. Expertise Section
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('expertise')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const shot3 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "about_middle_expertise.png"), Buffer.from(shot3.data, "base64"));

    // 4. Arsenal Section
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('arsenal')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const shot4 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "about_middle_arsenal.png"), Buffer.from(shot4.data, "base64"));

    // 5. Final CTA Section
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('cta')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const shot5 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "about_final_cta.png"), Buffer.from(shot5.data, "base64"));

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

    // Mobile Transition & Background
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('background')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const mobShot1 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "about_mobile_transition.png"), Buffer.from(mobShot1.data, "base64"));

    // Mobile Approach
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('approach')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const mobShot2 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "about_mobile_approach.png"), Buffer.from(mobShot2.data, "base64"));

    // Mobile Expertise
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('expertise')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const mobShot3 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "about_mobile_expertise.png"), Buffer.from(mobShot3.data, "base64"));

    // Mobile Arsenal
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('arsenal')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const mobShot4 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "about_mobile_arsenal.png"), Buffer.from(mobShot4.data, "base64"));

    // Mobile CTA
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `document.getElementById('cta')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise((r) => setTimeout(r, 1000));
    const mobShot5 = await sendCommand(ws, msgId++, "Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, "about_mobile_cta.png"), Buffer.from(mobShot5.data, "base64"));

    ws.close();
  } finally {
    chrome.kill();
  }
}

captureAbout().catch(console.error);
