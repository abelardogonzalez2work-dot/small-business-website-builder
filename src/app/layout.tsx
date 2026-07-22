import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SB Page",
    template: "%s | SB Page",
  },
  description: "A guided business-page product for nontechnical small-business owners.",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f1ea",
  width: "device-width",
  initialScale: 1,
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
