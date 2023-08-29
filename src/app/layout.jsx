import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ariefro | HOME",
  description:
    "Arief Romadhon is a backend developer who designs, builds, and maintains the server-side components of software applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster
          toastOptions={{
            success: {
              duration: 3000,
              icon: "🚀",
            },
            error: {
              duration: 3000,
            },
          }}
        />
      </body>
    </html>
  );
}
