import { Footer, Navbar, Sidebar } from "@/components";
import "../../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ariefro | WORK",
  description:
    "Arief Romadhon is a backend engineer who designs, builds, and maintains the server-side components of software applications.",
};

export default function ProjectsLayout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 bg-primary">
      <Navbar className="text-tertiary" bgLineColor="bg-tertiary" />
      {children}
      <Footer />
    </div>
  );
}
