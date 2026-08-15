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

async function testFlightToFrame() {
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9229",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,1000",
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const targets = await getJson("http://127.0.0.1:9229/json/list");
    const pageTarget = targets.find((t) => t.type === "page") || targets[0];

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((r) => ws.on("open", r));

    let msgId = 1;
    await sendCommand(ws, msgId++, "Page.enable");
    await sendCommand(ws, msgId++, "Runtime.enable");

    // 1. Desktop Test
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false,
    });

    console.log("Navigating to https://nivasfpv.in/ ...");
    await sendCommand(ws, msgId++, "Page.navigate", { url: "https://nivasfpv.in/" });
    await new Promise((r) => setTimeout(r, 3500));

    // Scroll to flight-to-frame section
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const section = document.getElementById('flight-to-frame');
        if (section) section.scrollIntoView();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 2000));

    // Test 1: Active Playback and Synchronization
    const syncStatus = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const section = document.getElementById('flight-to-frame');
        const [graded, raw] = Array.from(section.querySelectorAll('video'));
        return {
          graded: {
            src: graded.currentSrc || graded.src,
            currentTime: graded.currentTime,
            paused: graded.paused,
            muted: graded.muted,
            playsInline: graded.playsInline,
            preload: graded.preload,
          },
          raw: {
            src: raw.currentSrc || raw.src,
            currentTime: raw.currentTime,
            paused: raw.paused,
            muted: raw.muted,
            playsInline: raw.playsInline,
            preload: raw.preload,
          },
          timeDifferenceSeconds: Math.abs(raw.currentTime - graded.currentTime),
          inSync: Math.abs(raw.currentTime - graded.currentTime) < 0.05,
        };
      })()`,
      returnByValue: true,
    });

    console.log("Flight to Frame Live Sync Status:", JSON.stringify(syncStatus.result.value, null, 2));

    // Test 2: Seek test near end to verify synchronized loop restart
    const loopCycleTest = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(async () => {
        const section = document.getElementById('flight-to-frame');
        const [graded, raw] = Array.from(section.querySelectorAll('video'));
        
        // Seek near end
        const seekTarget = Math.max(0, raw.duration - 0.8);
        raw.currentTime = seekTarget;
        graded.currentTime = seekTarget;
        
        // Wait for loop trigger
        await new Promise(r => setTimeout(r, 1500));
        
        return {
          rawCurrentTime: raw.currentTime,
          gradedCurrentTime: graded.currentTime,
          rawPaused: raw.paused,
          gradedPaused: graded.paused,
          bothRestartedAtZero: raw.currentTime < 2.0 && graded.currentTime < 2.0,
          driftAfterLoop: Math.abs(raw.currentTime - graded.currentTime),
        };
      })()`,
      awaitPromise: true,
      returnByValue: true,
    });

    console.log("Flight to Frame Loop Cycle Test:", JSON.stringify(loopCycleTest.result.value, null, 2));

    // Test 3: Slider Drag Interaction
    const sliderTest = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const slider = document.querySelector('.before-after-slider');
        if (!slider) return { error: 'Slider not found' };
        
        // Move slider to 30%
        const rect = slider.getBoundingClientRect();
        const eventDown = new MouseEvent('mousedown', { clientX: rect.left + rect.width * 0.3, bubbles: true });
        slider.dispatchEvent(eventDown);
        
        return {
          sliderAriaValue: slider.getAttribute('aria-valuenow'),
        };
      })()`,
      returnByValue: true,
    });

    console.log("Slider Interaction Test:", JSON.stringify(sliderTest.result.value, null, 2));

    // Capture Desktop Screenshot
    const desktopScreenshot = await sendCommand(ws, msgId++, "Page.captureScreenshot", {
      format: "png",
    });
    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, "live_desktop_flight_to_frame_final.png"),
      Buffer.from(desktopScreenshot.data, "base64")
    );
    console.log("Saved screenshot to live_desktop_flight_to_frame_final.png");

    // 2. Mobile Viewport Test (390px)
    console.log("Testing Mobile Viewport (390px)...");
    await sendCommand(ws, msgId++, "Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true,
    });

    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const section = document.getElementById('flight-to-frame');
        if (section) section.scrollIntoView();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 2000));

    const mobileStatus = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const section = document.getElementById('flight-to-frame');
        const [graded, raw] = Array.from(section.querySelectorAll('video'));
        return {
          graded: { currentTime: graded.currentTime, paused: graded.paused },
          raw: { currentTime: raw.currentTime, paused: raw.paused },
          diff: Math.abs(raw.currentTime - graded.currentTime),
        };
      })()`,
      returnByValue: true,
    });

    console.log("Mobile Live Sync Status:", JSON.stringify(mobileStatus.result.value, null, 2));

    const mobileScreenshot = await sendCommand(ws, msgId++, "Page.captureScreenshot", {
      format: "png",
    });
    fs.writeFileSync(
      path.join(ARTIFACTS_DIR, "live_mobile_flight_to_frame_final.png"),
      Buffer.from(mobileScreenshot.data, "base64")
    );
    console.log("Saved screenshot to live_mobile_flight_to_frame_final.png");

    ws.close();
  } finally {
    chrome.kill();
  }
}

testFlightToFrame().catch(console.error);
