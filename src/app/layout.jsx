import { Navbar, Sidebar } from "@/components";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ariefro | HOME",
  description:
    "Arief Romadhon is a backend engineer who designs, builds, and maintains the server-side components of software applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto px-4">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
