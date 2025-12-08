import fs from "fs";
import path from "path";

export type AirPulseBuild = {
  /** Absolute filesystem path to the installer/apk */
  path: string;
  /** File name only, e.g. AirPulse-Installer.exe */
  fileName: string;
  /** Platform type */
  platform: "windows" | "android";
  /** Last modified timestamp */
  updatedAt: Date;
};

const WINDOWS_CANDIDATE_DIRS = [
  // Preferred installer output
  "../AirPulse/Installer",
  // Release builds
  "../AirPulse/Releases",
];

const ANDROID_CANDIDATE_DIRS = [
  // Preferred installer output
  "../AirPulse/Installer",
];

function isExe(name: string) {
  return name.toLowerCase().endsWith(".exe");
}

function isApk(name: string) {
  return name.toLowerCase().endsWith(".apk");
}

export async function getLatestWindowsBuild(): Promise<AirPulseBuild | null> {
  const projectRoot = process.cwd();
  const candidates: AirPulseBuild[] = [];

  for (const relDir of WINDOWS_CANDIDATE_DIRS) {
    const dir = path.resolve(projectRoot, relDir);

    if (!fs.existsSync(dir)) continue;
    const entries = await fs.promises.readdir(dir);

    for (const entry of entries) {
      if (!isExe(entry)) continue;
      const fullPath = path.join(dir, entry);
      const stats = await fs.promises.stat(fullPath);
      if (!stats.isFile()) continue;

      candidates.push({
        path: fullPath,
        fileName: entry,
        platform: "windows",
        updatedAt: stats.mtime,
      });
    }
  }

  if (!candidates.length) return null;

  candidates.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  return candidates[0] ?? null;
}

export async function getLatestAndroidBuild(): Promise<AirPulseBuild | null> {
  const projectRoot = process.cwd();
  const candidates: AirPulseBuild[] = [];

  for (const relDir of ANDROID_CANDIDATE_DIRS) {
    const dir = path.resolve(projectRoot, relDir);

    if (!fs.existsSync(dir)) continue;
    const entries = await fs.promises.readdir(dir);

    for (const entry of entries) {
      if (!isApk(entry)) continue;
      const fullPath = path.join(dir, entry);
      const stats = await fs.promises.stat(fullPath);
      if (!stats.isFile()) continue;

      candidates.push({
        path: fullPath,
        fileName: entry,
        platform: "android",
        updatedAt: stats.mtime,
      });
    }
  }

  if (!candidates.length) return null;

  candidates.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  return candidates[0] ?? null;
}

