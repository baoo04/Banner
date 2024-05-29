/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comment out this function to facing issue with image caching
  // async headers() {
  //   return [
  //     {
  //       source: "/:all*(svg|jpg|png|gif|js|webp)",
  //       locale: false,
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=86400, must-revalidate",
  //         },
  //       ],
  //     },
  //   ];
  // },
  // images: {
  //   remotePatterns: [
  //     {
  //       // Example of image cdn/host config
  //       protocol: "https",
  //       hostname: "**.unsplash.com",
  //       port: "",
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
