export const metadata = {
  title: "NavaCharge",
  description: "EV Charging Support, Diagnostics, and Cable Management Solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
