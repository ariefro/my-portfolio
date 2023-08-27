import { Footer, Navbar, Sidebar } from "@/components";
import "../../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ariefro | WORK",
  description:
    "Arief Romadhon is a backend developer who designs, builds, and maintains the server-side components of software applications.",
};

export default function ProjectsLayout({ children }) {
  return (
    <div className="bg-primary">
      <Navbar className="text-tertiary" bgLineColor="bg-tertiary" />
      {children}
      <Footer
        className="bg-tertiary text-primary"
        buttonClassName="bg-primary text-tertiary"
      />
    </div>
  );
}
