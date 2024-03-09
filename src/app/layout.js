import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { AppProvider } from "../context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recharts Next.js",
  description: "An example of using Recharts with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppProvider>
        <body className="bg-slate-950 text-white flex flex-col min-h-screen">
          <main className={`flex-grow ${inter.className}`}>{children}</main>
          <Footer />
        </body>
      </AppProvider>
    </html>
  );
}
