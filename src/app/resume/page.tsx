export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
          <a
            href="/"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            ← Back
          </a>
        </div>

        <p className="mt-3 text-sm text-slate-600">
          If the resume doesn’t render in your browser, open it directly:{" "}
          <a
            className="font-semibold underline"
            href="/resume/SaiPriyaPalla_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View PDF
          </a>
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 overflow-hidden">
          <iframe
            title="Sai Priya Palla Resume"
            src="/resume/SaiPriyaPalla_Resume.pdf"
            className="w-full"
            style={{ height: "80vh" }}
          />
        </div>
      </div>
    </main>
  );
}