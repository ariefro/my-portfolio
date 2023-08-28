import { Navbar } from "@/components";
import "../../styles/globals.css";

export const metadata = {
  title: "ariefro | CONTACT",
  description:
    "Arief Romadhon is a backend developer who designs, builds, and maintains the server-side components of software applications.",
};

export default function ContactLayout({ children }) {
  return (
    <div className="bg-primary h-screen mx-auto px-4 text">
      <Navbar className="text-tertiary" bgLineColor="bg-tertiary" />
      {children}
    </div>
  );
}
