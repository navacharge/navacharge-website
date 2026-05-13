import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NavaCharge",
  description:
    "EV Charging Support, Diagnostics, and Cable Management Solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          margin: 0,
          background: "#f6f3ec",
        }}
      >
        {children}
      </body>
    </html>
  );
}
