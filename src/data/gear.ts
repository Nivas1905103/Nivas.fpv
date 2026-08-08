// ═══════════════════════════════════════════════════
// NIVAS.FPV — Gear Data
// ═══════════════════════════════════════════════════

export interface GearItem {
  name: string;
  category: string;
  description: string;
}

export const gear: GearItem[] = [
  {
    name: "DJI Avata 2",
    category: "FPV Drone",
    description: "Primary FPV platform for cinematic shoots",
  },
  {
    name: "DJI Goggles 3",
    category: "FPV System",
    description: "Immersive piloting with low-latency HD feed",
  },
  {
    name: "4K Camera Systems",
    category: "Camera",
    description: "High-resolution capture for cinematic output",
  },
  {
    name: "ND Filter Kit",
    category: "Accessories",
    description: "Professional exposure control for cinematic motion blur",
  },
  {
    name: "Professional Editing Workstation",
    category: "Post-Production",
    description: "High-performance system for editing, grading and delivery",
  },
];
