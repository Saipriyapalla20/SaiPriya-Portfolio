export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold">About</h1>

        <p className="mt-4 text-slate-700 leading-7 max-w-3xl">
          I’m Sai Priya Palla — an AI/ML Engineer focused on building production-grade GenAI
          systems (RAG, agents, and LLM-powered applications). I enjoy taking ideas from prototype
          to real deployments with strong evaluation, reliability, and governance.
        </p>

        <h2 className="mt-10 text-xl font-semibold">What I work on</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
          <li>RAG pipelines: chunking, embeddings, retrieval, reranking, metadata filters</li>
          <li>LLM evaluation: groundedness, citation accuracy, refusal correctness, regressions</li>
          <li>APIs & deployment: FastAPI, Docker, CI/CD, scalable inference patterns</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold">Contact</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            href="mailto:saipriyakrr@gmail.com"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
          >
            saipriyakrr@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/saipriyapalla"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </main>
  );
}