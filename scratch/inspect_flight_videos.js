const { spawn } = require("child_process");
const http = require("http");
const WebSocket = require("ws");

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

async function inspectFlightVideos() {
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9228",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,900",
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const targets = await getJson("http://127.0.0.1:9228/json/list");
    const pageTarget = targets.find((t) => t.type === "page") || targets[0];

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((r) => ws.on("open", r));

    let msgId = 1;
    await sendCommand(ws, msgId++, "Page.enable");
    await sendCommand(ws, msgId++, "Runtime.enable");

    console.log("Navigating to https://nivasfpv.in/ ...");
    await sendCommand(ws, msgId++, "Page.navigate", { url: "https://nivasfpv.in/" });
    await new Promise((r) => setTimeout(r, 4000));

    // Scroll to flight to frame
    await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const section = document.getElementById('flight-to-frame');
        if (section) section.scrollIntoView();
      })()`,
    });
    await new Promise((r) => setTimeout(r, 2000));

    const videoAnalysis = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(() => {
        const section = document.getElementById('flight-to-frame');
        const videos = Array.from(section.querySelectorAll('video'));
        return videos.map((v, i) => ({
          index: i,
          src: v.src || v.currentSrc,
          duration: v.duration,
          currentTime: v.currentTime,
          paused: v.paused,
          muted: v.muted,
          loop: v.loop,
          readyState: v.readyState,
          videoWidth: v.videoWidth,
          videoHeight: v.videoHeight,
        }));
      })()`,
      returnByValue: true,
    });

    console.log("Videos in Flight to Frame:", JSON.stringify(videoAnalysis.result.value, null, 2));

    // Let's test continuous synchronized loop over time
    const loopTracking = await sendCommand(ws, msgId++, "Runtime.evaluate", {
      expression: `(async () => {
        const section = document.getElementById('flight-to-frame');
        const [graded, raw] = Array.from(section.querySelectorAll('video'));
        
        const snapshots = [];
        for (let i = 0; i < 15; i++) {
          snapshots.push({
            time: i * 500,
            rawTime: raw.currentTime,
            gradedTime: graded.currentTime,
            diff: Math.abs(raw.currentTime - graded.currentTime),
            rawPaused: raw.paused,
            gradedPaused: graded.paused,
          });
          await new Promise(r => setTimeout(r, 500));
        }
        return snapshots;
      })()`,
      awaitPromise: true,
      returnByValue: true,
    });

    console.log("Playback tracking snapshots:", JSON.stringify(loopTracking.result.value, null, 2));

    ws.close();
  } finally {
    chrome.kill();
  }
}

inspectFlightVideos().catch(console.error);
