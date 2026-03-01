const projects = [
  {
    title: "Internal Banking LLM Assistant (RAG)",
    paragraph:
      "Built an internal, policy-aligned LLM assistant to support banking servicing workflows by combining LLM reasoning with retrieval from approved knowledge sources. Designed a production RAG pipeline with chunking, embeddings, metadata-aware retrieval, and reranking to improve relevance while reducing hallucination risk. Implemented a citation-backed response format so answers are traceable to retrieved documents, supporting governance and reviewer confidence. Exposed the assistant through secure APIs and integrated it into application flows with clear escalation paths for sensitive or unsupported requests.",
    impact:
      "Reduced hallucination risk and improved trust by enforcing grounded, citation-backed responses in production workflows.",
    tech: [
      "LangChain",
      "GPT-4 / Claude / Llama",
      "Pinecone",
      "ChromaDB",
      "FastAPI",
      "RESTful APIs",
      "GraphQL",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    title: "LLM Evaluation & Governance",
    paragraph:
      "Designed a governance-first evaluation approach for LLM applications focused on safety, correctness, and stability across releases. Built test coverage for retrieval quality, groundedness, citation accuracy, refusal behavior, and regression checks so production changes can be validated consistently. Standardized response schemas and logging so each output can be inspected with the underlying retrieval context and decision trail. Integrated automated checks into CI/CD to prevent quality regressions and enforce predictable behavior under edge cases.",
    impact:
      "Made LLM releases measurable and reviewable by adding repeatable evaluations that prevent regressions and unsafe behavior.",
    tech: [
      "Python",
      "LangChain",
      "PyTorch",
      "TensorFlow",
      "CI/CD",
      "RAG Testing",
      "Observability/Logging",
    ],
  },
  {
    title: "Healthcare ML Models",
    paragraph:
      "Delivered ML solutions for healthcare-style use cases such as readmission risk prediction and anomaly detection on vitals/lab trends. Built feature engineering for time-series patterns and integrated structured clinical data to improve signal quality for downstream decisioning. Implemented model training workflows and exposed predictions through deployment-ready APIs for integration into dashboards or operational tools. Added validation and monitoring practices to support reliability across data shifts and real-world usage.",
    impact:
      "Improved decision support by turning complex clinical signals into reliable, deployable model outputs.",
    tech: [
      "LightGBM",
      "Random Forest",
      "PyTorch",
      "TensorFlow",
      "FastAPI/Flask",
      "AWS SageMaker",
      "Airflow",
      "PostgreSQL",
    ],
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

              <p className="mt-3 text-sm text-slate-700 leading-7">
                {p.paragraph}
              </p>

              {/* Impact line */}
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Impact: <span className="font-medium text-slate-700">{p.impact}</span>
              </p>

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