import "./globals.css";

export const metadata = {
  title: "Jake's Constructions",
  description: "Building the future, one structure at a time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background-light text-gray-900">
        <main>{children}</main>
      </body>
    </html>
  );
}

