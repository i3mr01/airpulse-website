import { NextRequest } from "next/server";
import { getLatestWindowsBuild, getLatestAndroidBuild } from "@/lib/get-latest-builds";
import path from "path";
import fs from "fs";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const platform = url.searchParams.get("platform");

  let build;
  
  if (platform === "android") {
    build = await getLatestAndroidBuild();
  } else {
    // Default to Windows
    build = await getLatestWindowsBuild();
  }

  if (!build || !build.path) {
    return new Response(
      `No AirPulse ${platform === "android" ? "Android" : "Windows"} build found.`,
      { status: 404 }
    );
  }

  const absolutePath = path.resolve(build.path.toString());
  if (!fs.existsSync(absolutePath)) {
    return new Response("Build not found on server.", { status: 404 });
  }

  const stat = await fs.promises.stat(absolutePath);
  const file = fs.createReadStream(absolutePath);
  const fileName = path.basename(absolutePath);

  return new Response(file as any, {
    status: 200,
    headers: {
      "Content-Type": platform === "android" 
        ? "application/vnd.android.package-archive"
        : "application/octet-stream",
      "Content-Length": stat.size.toString(),
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}

