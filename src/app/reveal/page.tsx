import type { Metadata } from "next";
import StoryTrailerGenerator from "@/components/reveal/StoryTrailerGenerator";

export const metadata: Metadata = {
  title: "Instagram Story Reveal Trailer (9:16) | NIVAS.FPV",
  description: "Ultra-cinematic 9:16 Instagram Story reveal trailer and high-bitrate video exporter for NIVAS.FPV portfolio launch.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RevealPage() {
  return <StoryTrailerGenerator />;
}
