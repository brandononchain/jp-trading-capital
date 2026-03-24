import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JP Trading Capital — Join the Private Community Where Traders Grow",
  description:
    "Copy proven traders and automated bots. No experience needed. Your funds stay in your own broker account. Join JP Trading Capital today.",
  openGraph: {
    title: "JP Trading Capital",
    description: "Join the private community where traders grow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
