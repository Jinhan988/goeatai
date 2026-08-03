import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoEat AI — Turn your fridge into a weekly meal plan in 30 seconds",
  description: "Snap your fridge. Get a personalized 7-day meal plan, shopping list, and grocery budget — powered by AI.",
  openGraph: {
    title: "GoEat AI — Meal planning powered by AI",
    description: "Snap your fridge. Get a 7-day meal plan instantly.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="bg-cream text-forest antialiased font-sans">{children}</body>
    </html>
  );
}
