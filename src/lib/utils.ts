// ═══════════════════════════════════════════════════
// NIVAS.FPV — Utility Functions
// ═══════════════════════════════════════════════════

import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names conditionally
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format project number with leading zero
 */
export function formatProjectNumber(num: number, total: number): string {
  return `${String(num).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
}

/**
 * Truncate text to a maximum length
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}
