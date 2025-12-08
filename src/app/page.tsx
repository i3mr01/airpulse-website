import { HomeClient } from "@/components/home-client";
import { getLatestWindowsBuild, getLatestAndroidBuild } from "@/lib/get-latest-builds";

export default async function Home() {
  const windowsBuild = await getLatestWindowsBuild();
  const androidBuild = await getLatestAndroidBuild();

  return <HomeClient windowsBuild={windowsBuild} androidBuild={androidBuild} />;
}

