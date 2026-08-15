const ffmpeg = require("ffmpeg-static");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const publicVideosDir = "/Users/nivassanmugam/Downloads/nivas-fpv-website/public/videos";
const publicPostersDir = "/Users/nivassanmugam/Downloads/nivas-fpv-website/public/images/posters";

const videos = [
  { id: "13", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/13.mp4", outputName: "13.mp4", posterName: "hero-13.jpg", isLoop: true },
  { id: "10", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/10.mp4", outputName: "10.mp4", posterName: "project-10.jpg", isLoop: true },
  { id: "1", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/1.mp4", outputName: "1.mp4", posterName: "final-1.jpg", isLoop: false },
  { id: "2", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/2.mp4", outputName: "2.mp4", posterName: "project-2.jpg", isLoop: true },
  { id: "3", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/3.mp4", outputName: "3.mp4", posterName: "final-3.jpg", isLoop: false },
  { id: "4", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/4.mp4", outputName: "4.mp4", posterName: "project-4.jpg", isLoop: true },
  { id: "5", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/5.mp4", outputName: "5.mp4", posterName: "final-5.jpg", isLoop: false },
  { id: "6", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/6.mp4", outputName: "6.mp4", posterName: "project-6.jpg", isLoop: true },
  { id: "7", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/7.mp4", outputName: "7.mp4", posterName: "final-7.jpg", isLoop: false },
  { id: "8", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/8.mp4", outputName: "8.mp4", posterName: "project-8.jpg", isLoop: true },
  { id: "9", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/9.mp4", outputName: "9.mp4", posterName: "final-9.jpg", isLoop: false },
  { id: "11", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/11.mp4", outputName: "11.mp4", posterName: "f2f-raw.jpg", isLoop: true },
  { id: "12", input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/12.mp4", outputName: "12.mp4", posterName: "f2f-graded.jpg", isLoop: true },
];

for (const v of videos) {
  const outputPath = path.join(publicVideosDir, v.outputName);
  const audioArg = v.isLoop ? "-an" : "-c:a aac -b:a 128k -ar 48000";
  const crf = v.isLoop ? "26" : "24";
  const cmd = `${ffmpeg} -y -i "${v.input}" -c:v libx264 -profile:v high -level:v 4.1 -preset fast -crf ${crf} -pix_fmt yuv420p -movflags +faststart ${audioArg} "${outputPath}"`;
  console.log(`Re-optimizing ${v.id}...`);
  execSync(cmd, { stdio: "ignore" });
  const size = (fs.statSync(outputPath).size / (1024 * 1024)).toFixed(2);
  console.log(`-> ${v.outputName}: ${size} MB`);
}
