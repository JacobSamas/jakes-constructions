import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Jake's Constructions",
  description: "Building the future, one structure at a time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background-light text-gray-900">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
