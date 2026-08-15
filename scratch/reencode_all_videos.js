const ffmpeg = require("ffmpeg-static");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const publicVideosDir = "/Users/nivassanmugam/Downloads/nivas-fpv-website/public/videos";
const publicPostersDir = "/Users/nivassanmugam/Downloads/nivas-fpv-website/public/images/posters";

if (!fs.existsSync(publicPostersDir)) {
  fs.mkdirSync(publicPostersDir, { recursive: true });
}

const videos = [
  {
    id: "13",
    name: "Homepage Hero",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/13.mp4",
    outputName: "13.mp4",
    posterName: "hero-13.jpg",
    isLoopOnly: true,
  },
  {
    id: "10",
    name: "Project 1 Hero (Chase the Moment)",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/10.mp4",
    outputName: "10.mp4",
    posterName: "project-10.jpg",
    isLoopOnly: true,
  },
  {
    id: "1",
    name: "Project 1 Final (Chase the Moment)",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/1.mp4",
    outputName: "1.mp4",
    posterName: "final-1.jpg",
    isLoopOnly: false,
  },
  {
    id: "2",
    name: "Project 2 Hero (Vertical Rise)",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/2.mp4",
    outputName: "2.mp4",
    posterName: "project-2.jpg",
    isLoopOnly: true,
  },
  {
    id: "3",
    name: "Project 2 Final (Vertical Rise)",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/3.mp4",
    outputName: "3.mp4",
    posterName: "final-3.jpg",
    isLoopOnly: false,
  },
  {
    id: "4",
    name: "Project 3 Hero (Into the Wild)",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/4.mp4",
    outputName: "4.mp4",
    posterName: "project-4.jpg",
    isLoopOnly: true,
  },
  {
    id: "5",
    name: "Project 3 Final (Into the Wild)",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/5.mp4",
    outputName: "5.mp4",
    posterName: "final-5.jpg",
    isLoopOnly: false,
  },
  {
    id: "6",
    name: "Project 4 Hero (Velocity Shift)",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/6.mp4",
    outputName: "6.mp4",
    posterName: "project-6.jpg",
    isLoopOnly: true,
  },
  {
    id: "7",
    name: "Project 4 Final (Velocity Shift)",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/7.mp4",
    outputName: "7.mp4",
    posterName: "final-7.jpg",
    isLoopOnly: false,
  },
  {
    id: "8",
    name: "Project 5 Hero (Skyline Drift)",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/8.mp4",
    outputName: "8.mp4",
    posterName: "project-8.jpg",
    isLoopOnly: true,
  },
  {
    id: "9",
    name: "Project 5 Final (Skyline Drift)",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/9.mp4",
    outputName: "9.mp4",
    posterName: "final-9.jpg",
    isLoopOnly: false,
  },
  {
    id: "11",
    name: "FlightToFrame RAW",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/11.mp4",
    outputName: "11.mp4",
    posterName: "f2f-raw.jpg",
    isLoopOnly: true,
  },
  {
    id: "12",
    name: "FlightToFrame GRADED",
    input: "https://pub-3d5e3982f71a484f82577b7b91b11a62.r2.dev/12.mp4",
    outputName: "12.mp4",
    posterName: "f2f-graded.jpg",
    isLoopOnly: true,
  },
];

async function processAll() {
  console.log("Starting video re-encoding and poster extraction for Safari/iOS compatibility...");

  for (const v of videos) {
    const outputPath = path.join(publicVideosDir, v.outputName);
    const posterPath = path.join(publicPostersDir, v.posterName);

    console.log(`\n--------------------------------------------------`);
    console.log(`Processing ${v.id}: ${v.name}`);
    console.log(`Input: ${v.input}`);
    console.log(`Output: ${outputPath}`);

    // 1. Re-encode video to strict iOS/Safari H.264 profile
    // -c:v libx264 -profile:v high -level:v 4.1 -pix_fmt yuv420p -movflags +faststart
    // -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" or keep native 1080p
    const audioArg = v.isLoopOnly ? "-an" : "-c:a aac -b:a 128k -ar 48000";
    const crf = v.isLoopOnly ? "23" : "21";

    const cmd = `${ffmpeg} -y -i "${v.input}" -c:v libx264 -profile:v high -level:v 4.1 -preset medium -crf ${crf} -pix_fmt yuv420p -movflags +faststart ${audioArg} "${outputPath}"`;
    
    console.log(`Running: ${cmd}`);
    execSync(cmd, { stdio: "inherit" });

    // 2. Extract clean first frame poster
    const posterCmd = `${ffmpeg} -y -ss 00:00:00.200 -i "${outputPath}" -vframes 1 -q:v 2 "${posterPath}"`;
    console.log(`Extracting poster: ${posterCmd}`);
    execSync(posterCmd, { stdio: "inherit" });

    const stats = fs.statSync(outputPath);
    console.log(`Successfully encoded ${v.outputName} (${(stats.size / (1024 * 1024)).toFixed(2)} MB)`);
  }

  console.log("\n================ ALL VIDEOS RE-ENCODED SUCCESSFULLY ================\n");
}

processAll().catch(console.error);
