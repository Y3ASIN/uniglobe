import { Inter, Inria_Serif } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Regular (400), SemiBold (600), Bold (700)
  variable: "--font-inter",
});

export const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inria-serif",
});
