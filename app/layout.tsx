import Navbar from "./component/Navbar";
import "./globals.css"; // Ensure this imports your global styles

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900"> {/* Add styles here */}
        <Navbar />
        <main className="p-6 max-w-4xl mx-auto">{children}</main> {/* Adds spacing */}
      </body>
    </html>
  );
}
