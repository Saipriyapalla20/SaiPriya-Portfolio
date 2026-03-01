import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Priya Palla | Portfolio",
  description: "AI/ML Engineer & Data Scientist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900`}>
        {/* Navbar */}
        <header className="border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold hover:opacity-80">
              Sai Priya Palla
            </a>

            <nav className="flex gap-4 text-sm font-semibold text-slate-700">
              <a href="/" className="hover:text-slate-900">
                Home
              </a>
              <a href="/projects" className="hover:text-slate-900">
                Projects
              </a>
              <a href="/about" className="hover:text-slate-900">
                About
              </a>
              <a href="/resume" className="hover:text-slate-900">
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/saipriyapalla"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}