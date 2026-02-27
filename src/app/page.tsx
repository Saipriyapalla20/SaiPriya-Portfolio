export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Sai Priya Palla
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl">
          AI/ML Engineer focused on GenAI, RAG systems, and production-ready LLM applications.
          I build grounded, citation-backed AI assistants and scalable ML/data platforms.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/projects"
            className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800"
          >
            View Projects
          </a>

          <a
            href="/about"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
          >
            About Me
          </a>

          <a
            href="/resume/SaiPriyaPalla_Resume.pdf"
            target="_blank"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
          >
            Download Resume
          </a>

          <a
            href="mailto:saipriyakrr@gmail.com"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
          >
            Email Me
          </a>
        </div>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "GenAI + RAG",
              desc: "LangChain, GPT-4/Claude/Llama, Pinecone/Chroma, retrieval + reranking.",
            },
            {
              title: "Production Systems",
              desc: "FastAPI services, Docker/K8s, CI/CD, monitoring, governance-ready outputs.",
            },
            {
              title: "ML + Data",
              desc: "NLP, CV, feature engineering, pipelines, evaluation and testing.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 p-5 shadow-sm"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </section>

        <footer className="mt-16 text-sm text-slate-500">
          © {new Date().getFullYear()} Sai Priya Palla. Built with Next.js + Tailwind.
        </footer>
      </div>
    </main>
  );
}