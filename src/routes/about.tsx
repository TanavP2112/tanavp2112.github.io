import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Chen" },
      { name: "description", content: "CS & Math undergrad, aspiring software engineer and quantitative trader. The short version of how I got here." },
      { property: "og:title", content: "About — Alex Chen" },
      { property: "og:description", content: "How I got here, how I work, and what I'm looking for next." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { y: "Summer 2025", t: "SWE Intern @ mid-size fintech", d: "Built monitoring dashboards for the trade-reconciliation pipeline." },
  { y: "2024 →", t: "Treasurer · Quant Finance Club", d: "Run weekly research seminars, organize Bloomberg-terminal workshops." },
  { y: "Summer 2024", t: "Research Asst. · Applied Math Lab", d: "Numerical methods for stochastic differential equations." },
  { y: "2023 →", t: "BSc Computer Science + Math (Stats)", d: "GPA 3.92 · Coursework in stochastic calc, ML, distributed systems." },
  { y: "2023", t: "First trade", d: "Lost $40 on a covered call. Learned more than the next ten profitable ones." },
];

function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-6 lg:px-10 pt-24 lg:pt-32 pb-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6">/03 — About</p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl font-semibold tracking-tighter text-balance leading-[1]"
        >
          Junior engineer with a long list of opinions and an even longer reading list.
        </motion.h1>

        <div className="mt-12 grid md:grid-cols-3 gap-10 text-pretty">
          <div className="md:col-span-2 space-y-5 text-lg text-foreground/90">
            <p>
              I'm a third-year CS &amp; Math student aiming for the intersection of software engineering and quantitative trading. I got hooked on markets after reading <em>The Man Who Solved the Market</em>, and on programming after writing my first Pine Script that lost money very efficiently.
            </p>
            <p>
              These days I split my time between coursework, side projects, and the quant finance club at school. I care a lot about writing software that's correct, not just clever — backtests are easy to fool, but production isn't.
            </p>
            <p>
              I'm looking for a Summer 2026 internship where I can learn from senior engineers and traders who hold the bar high. Long-term I'd love to work somewhere that takes both research and engineering seriously.
            </p>
          </div>

          <aside className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Currently</p>
              <p>Toronto, Canada · ET</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Looking for</p>
              <p>Summer 2026 SWE / Quant Dev / Quant Research internships · Open to relocate (NYC, Chicago, London)</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Stack</p>
              <p>Python, C++, Go, TypeScript · NumPy, PyTorch, kdb+ (learning), React.</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Reading</p>
              <p>Hull · Sinclair · &ldquo;Designing Data-Intensive Applications.&rdquo;</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-16 lg:py-24">
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">A rough timeline</h2>
        <ol className="relative border-l border-border/60 pl-8 space-y-10">
          {timeline.map((row, i) => (
            <motion.li
              key={row.t}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{row.y}</p>
              <h3 className="font-display text-xl font-semibold mt-1">{row.t}</h3>
              <p className="text-muted-foreground">{row.d}</p>
            </motion.li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
