import { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  pageShots: {
    pages: [{ path: "/", name: "landing" }],
    baseUrl: "http://172.17.0.1:3000",
  },
  lostPixelProjectId: "cmg33d82906m011p1m06dj8xt",
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
