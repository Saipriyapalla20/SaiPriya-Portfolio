import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sai Priya Palla | Portfolio",
  description: "AI/ML Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
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

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}