import "./globals.css";

export const metadata = {
  title: "TC Handyman",
  description: "Professional handyman services in Tooele and surrounding areas",
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
