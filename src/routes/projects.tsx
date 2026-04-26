import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { ThreeRibbon } from "@/components/ThreeRibbon";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Jane Doe" },
      { name: "description", content: "A selection of products, tools and experiments I've built across fintech, AI, devtools and climate." },
      { property: "og:title", content: "Projects — Jane Doe" },
      { property: "og:description", content: "A selection of products, tools and experiments I've built." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    year: "2025",
    name: "Ledger.io",
    role: "Founding Engineer",
    tag: "Fintech / SaaS",
    desc: "Real-time double-entry accounting designed for indie SaaS. Built the event-sourced ledger core and the audit dashboard. Live with 400+ teams.",
    stack: ["TypeScript", "Postgres", "Kafka", "React"],
    metric: "$12M",
    metricLabel: "Tracked monthly",
  },
  {
    year: "2024",
    name: "Quill",
    role: "Lead Engineer",
    tag: "AI / Writing",
    desc: "An editor-first writing tool that gives structured, citeable AI suggestions instead of opaque chat replies. Led both the prosemirror-based editor and the inference proxy layer.",
    stack: ["React", "Rust", "ProseMirror", "OpenAI"],
    metric: "27k",
    metricLabel: "Weekly writers",
  },
  {
    year: "2024",
    name: "Probe",
    role: "Creator",
    tag: "Devtools / Open source",
    desc: "Lightweight tracing for Node and Bun that ships ~3% the data of OTel without losing the moments that matter. Used by a couple of YC startups in production.",
    stack: ["Bun", "TypeScript", "ClickHouse"],
    metric: "2.1k",
    metricLabel: "GitHub stars",
  },
  {
    year: "2022",
    name: "Watershed",
    role: "Senior Engineer",
    tag: "Climate / Data",
    desc: "Carbon accounting platform for Fortune-500 customers. Led a 6-month rewrite of the supplier data ingestion pipeline, cutting onboarding time from weeks to days.",
    stack: ["Python", "Snowflake", "dbt", "Next.js"],
    metric: "10×",
    metricLabel: "Faster onboarding",
  },
  {
    year: "2021",
    name: "Cinder",
    role: "Solo build",
    tag: "Side project",
    desc: "A tiny, fast static-site generator I use for my own blog and ~50 friends' sites. Markdown in, beautifully-typeset HTML out, no JS framework anywhere.",
    stack: ["Go", "Templ", "Tailwind"],
    metric: "<5kb",
    metricLabel: "JS per page",
  },
];

function ProjectsPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 opacity-60"><ThreeRibbon /></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">/02 — Projects</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter max-w-3xl text-balance">
            Selected work, in roughly the order it was made.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
        <ul className="divide-y divide-border/60">
          {projects.map((p, i) => (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group py-10 grid md:grid-cols-12 gap-6 hover:bg-surface/30 transition-colors -mx-6 px-6 rounded-lg"
            >
              <div className="md:col-span-1 font-mono text-sm text-muted-foreground">{p.year}</div>

              <div className="md:col-span-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <h2 className="font-display text-3xl md:text-4xl font-semibold">{p.name}</h2>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">{p.tag}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{p.role}</p>
                <p className="text-foreground/90 max-w-xl text-pretty">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs font-mono px-2 py-1 rounded border border-border/60 text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3 md:text-right">
                <div className="font-display text-4xl md:text-5xl font-semibold text-primary">{p.metric}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-mono mt-1">{p.metricLabel}</div>
              </div>

              <div className="md:col-span-2 md:text-right self-center text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                Case study →
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
