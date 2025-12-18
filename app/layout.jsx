/* eslint-disable no-unused-vars */
export const metadata = {
  title: "Tooele Handyman Services",
  description:
    "Local • Licensed • Insured handyman services in Tooele and surrounding areas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
