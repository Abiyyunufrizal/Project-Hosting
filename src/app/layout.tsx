import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KodeBit CloudApps",
    template: "%s — KodeBit CloudApps",
  },
  description: "Shared Hosting & VPS RDP Indonesia dengan CodeByte Panel",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
