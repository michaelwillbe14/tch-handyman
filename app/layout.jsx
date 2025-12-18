// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "TC Handyman",
  description: "Handyman services in Tooele County",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
