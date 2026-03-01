export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm font-medium text-slate-600">Portfolio</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Sai Priya Palla
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl leading-7">
            Senior AI/ML Engineer &amp; Data Scientist building production-grade GenAI systems (RAG, agents,
            and LLM-powered applications) across banking and healthcare. I focus on grounded,
            citation-backed outputs, strong evaluation, and reliable deployment patterns from
            prototype to production.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/projects"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800"
            >
              View Projects
            </a>

            <a
              href="/about"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl border border-slate-300 text-sm font-semibold hover:bg-slate-50"
            >
              About Me
            </a>

            {/* Resume is viewable (opens /resume page) */}
            <a
              href="/resume"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl border border-slate-300 text-sm font-semibold hover:bg-slate-50"
            >
              View Resume
            </a>

            <a
              href="mailto:saipriyakrr@gmail.com"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl border border-slate-300 text-sm font-semibold hover:bg-slate-50"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/saipriyapalla"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl border border-slate-300 text-sm font-semibold hover:bg-slate-50"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "GenAI + RAG",
              desc: "LangChain, GPT-4/Claude/Llama, Pinecone/Chroma, embeddings + chunking, metadata filtering, and reranking. Grounded, citation-backed responses with guardrails.",
            },
            {
              title: "Production Systems",
              desc: "FastAPI services, RESTful/GraphQL APIs, Docker/Kubernetes, CI/CD, Redis caching, structured logging, and secure deployments on cloud environments.",
            },
            {
              title: "ML + Data",
              desc: "PyTorch/TensorFlow, LightGBM/XGBoost, NLP (BERT-style), time-series feature engineering, Airflow pipelines, MLflow tracking, and PostgreSQL-backed analytics.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 p-5 shadow-sm"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700 leading-6">{item.desc}</p>
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