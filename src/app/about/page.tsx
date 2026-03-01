export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold">About</h1>

        {/* Updated 5-line, crisp paragraph + Data Scientist sentences */}
        <p className="mt-4 text-slate-700 leading-7 max-w-4xl">
          I’m Sai Priya Palla — a Senior AI/ML Engineer and Data Scientist, I have experience in
          building production-ready ML and GenAI systems across regulated banking/financial services and healthcare.{" "}
          I specialize in Retrieval-Augmented Generation (RAG) and LLM assistants using GPT-4, Claude, and Llama 2 with
          LangChain, Pinecone/ChromaDB, and FastAPI—designed with governance-first controls like citation-backed outputs,
          auditable traces, access-aware retrieval, and safety guardrails.{" "}
          I also deliver end-to-end ML solutions (predictive modeling, NLP, time-series analytics, and computer vision),
          taking models from feature engineering and pipelines to scalable deployment and monitoring.{" "}
          From a Data Scientist lens, I apply statistical modeling and experimentation (e.g., hypothesis testing, A/B testing,
          multivariate analysis) to turn messy data into measurable decisions and business outcomes.{" "}
          I’m most comfortable owning the full lifecycle—problem framing, system design, evaluation, deployment, and iteration.
        </p>

        <h2 className="mt-10 text-xl font-semibold">What I work on</h2>

        {/* 12 bullets – all grounded in your resume */}
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2 max-w-4xl">
          <li>
            Building LLM assistants for banking workflows with grounded, policy-aligned responses and clear handoff paths for
            unsupported or sensitive requests.
          </li>
          <li>
            Designing production RAG platforms (Pinecone/ChromaDB): chunking strategy, metadata tagging, retrieval filtering,
            and reranking to improve relevance and reduce hallucination-prone answers.
          </li>
          <li>
            Implementing “answer-with-sources” patterns: citation-required output schemas, traceable retrieval context, and
            reviewable audit trails for regulated environments.
          </li>
          <li>
            Establishing LLM evaluation beyond ROUGE/BLEU: retrieval precision/recall@k, groundedness/faithfulness checks,
            citation accuracy validation, refusal correctness, and safety-policy compliance regression suites.
          </li>
          <li>
            Long-document Q&A and structured extraction for mortgage/credit use cases, with schema validation rules to raise
            consistency of downstream extraction outputs.
          </li>
          <li>
            Building secure document intelligence pipelines for PDFs/scanned forms using OCR + NER with confidence scoring and
            human-in-the-loop fallback when confidence is low.
          </li>
          <li>
            Engineering FastAPI microservices for retrieval + orchestration with reliability features (caching, rate limiting,
            timeouts, retries, structured logging) and consistent response schemas.
          </li>
          <li>
            Model fine-tuning and routing decisions (e.g., LoRA on Llama 2) to balance quality, latency, and cost while keeping
            outputs within policy boundaries.
          </li>
          <li>
            Fraud/risk analytics using classical ML (e.g., XGBoost) and representation learning to produce analyst-facing
            signals and explanations for triage.
          </li>
          <li>
            Customer insights from text: sentiment + topic analytics over feedback and transcripts using BERT-style models to
            identify drivers of dissatisfaction and escalation themes.
          </li>
          <li>
            Healthcare ML delivery: readmission risk (LightGBM), vascular access failure (Random Forest), and anomaly detection
            (Isolation Forest + LSTM) with time-series feature engineering across vitals, labs, and treatment history.
          </li>
          <li>
            MLOps & deployment: Docker/Kubernetes, AWS (SageMaker/EKS), Airflow pipelines, MLflow monitoring, drift signals, staged
            rollouts, and safe rollback practices.
          </li>
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