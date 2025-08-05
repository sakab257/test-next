import { Roboto } from "next/font/google";
import { Geist } from "next/font/google";

export const roboto = Roboto({subsets: ['latin'], weight: ['100', '400', '700']});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

