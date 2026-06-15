import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // repo 이름이 jaegyeongkim.github.io 로 바뀌면 이 두 줄 제거
  basePath: isProd ? "/profile" : "",
  assetPrefix: isProd ? "/profile/" : "",
};

export default nextConfig;
