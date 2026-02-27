const projects = [
  {
    title: "Internal Banking LLM Assistant (RAG)",
    desc: "Built a policy-aligned LLM assistant using GPT-4 + LangChain with citation-backed responses. Implemented retrieval, metadata filtering, and reranking to reduce hallucinations.",
    tech: ["GPT-4", "LangChain", "Pinecone", "ChromaDB", "FastAPI"],
  },
  {
    title: "LLM Evaluation & Governance",
    desc: "Designed evaluation suite for groundedness, citation accuracy, refusal correctness, and regression testing to ensure safe production deployments.",
    tech: ["Python", "LLM Evaluation", "CI/CD"],
  },
  {
    title: "Healthcare ML Models",
    desc: "Implemented predictive models for readmission risk and anomaly detection on vitals/lab results with deployment-ready APIs.",
    tech: ["LightGBM", "Random Forest", "FastAPI/Flask", "AWS SageMaker"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
          <a
            href="/"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            ← Back
          </a>
        </div>

        <div className="mt-8 grid gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}