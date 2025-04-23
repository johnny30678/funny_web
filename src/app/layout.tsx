import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "天大的驚喜等著你！",
  description: "完成簡單步驟，領取你的專屬大獎！",
  icons: {
    icon: "/box.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
