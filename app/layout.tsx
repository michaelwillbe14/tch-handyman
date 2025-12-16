import "./globals.css";

export const metadata = {
  title: "TC Handyman",
  description: "Handyman services in Tooele and surrounding areas. Licensed & insured.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
