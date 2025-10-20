const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/irdm2026" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/irdm2026/" : "",
};

module.exports = nextConfig;
