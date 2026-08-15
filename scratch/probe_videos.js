const ffmpeg = require("ffmpeg-static");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const videoList = [
  { id: "13", name: "Homepage Hero", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/13.mp4", local: "public/videos/13.mov" },
  { id: "10", name: "Project 1 Hero (Chase the Moment)", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/10.mp4", local: "public/videos/10.MOV" },
  { id: "1", name: "Project 1 Final (Chase the Moment)", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/1.mp4", local: "public/videos/1.mov" },
  { id: "2", name: "Project 2 Hero (Vertical Rise)", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/2.mp4", local: "public/videos/2.mov" },
  { id: "3", name: "Project 2 Final (Vertical Rise)", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/3.mp4", local: "public/videos/3.mov" },
  { id: "4", name: "Project 3 Hero (Into the Wild)", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/4.mp4", local: "public/videos/4.mov" },
  { id: "5", name: "Project 3 Final (Into the Wild)", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/5.mp4", local: "public/videos/5.mov" },
  { id: "6", name: "Project 4 Hero (Velocity Shift)", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/6.mp4", local: "public/videos/6.mov" },
  { id: "7", name: "Project 4 Final (Velocity Shift)", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/7.mp4", local: "public/videos/7.mov" },
  { id: "8", name: "Project 5 Hero (Skyline Drift)", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/8.mp4", local: "public/videos/8.mov" },
  { id: "9", name: "Project 5 Final (Skyline Drift)", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/9.mp4", local: "public/videos/9.mov" },
  { id: "11", name: "FlightToFrame (RAW)", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/11.mp4", local: "public/videos/11.MOV" },
  { id: "12", name: "FlightToFrame (GRADED)", url: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/12.mp4", local: "public/videos/12.MOV" },
];

function probe(inputPath) {
  try {
    const jsonStr = execSync(
      `${ffmpeg} -i "${inputPath}" 2>&1`,
      { maxBuffer: 10 * 1024 * 1024 }
    ).toString();
    return jsonStr;
  } catch (err) {
    return err.stdout ? err.stdout.toString() : err.message;
  }
}

for (const v of videoList) {
  console.log(`\n================== PROBING ${v.id} (${v.name}) ==================`);
  const info = probe(v.url);
  const streamLines = info
    .split("\n")
    .filter((l) => l.includes("Stream #") || l.includes("Duration:") || l.includes("Video:"))
    .join("\n");
  console.log(streamLines);
}
