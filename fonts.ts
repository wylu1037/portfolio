import { Press_Start_2P, Silkscreen } from "next/font/google";

export const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400"], // or 700
  display: "swap",
  variable: "--font-silkscreen", // css variable
});
