import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ThreeHero } from "@/components/ThreeHero";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanav Palisetti — Aspiring Software Engineer & Quant" },
      {
        name: "description",
        content:
          "Portfolio of Tanav Palisetti — Statistics student building software, trading systems, and market research tools. Currently seeking 2026 Full-Time Roles.",
      },
      { property: "og:title", content: "Tanav Palisetti — Aspiring Software Engineer & Quant" },
      {
        property: "og:description",
        content:
          "Software, systems, and quantitative research — selected projects and ways to get in touch.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { k: "3.9", v: "GPA · CS + Math" },
  { k: "12", v: "Shipped projects" },
  { k: "2", v: "Hackathon wins" },
  { k: "24/7", v: "Markets watched" },
];

function Index() {
  return (
    <PageShell>
      <section className="relative min-h-[92vh] overflow-hidden">
        <ThreeHero />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-radial)" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-24 lg:pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6">
              ◆ Seeking SWE / Quant internships — Summer 2026
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tighter text-balance">
              Code, markets,
              <br />
              <span className="glow-text text-primary">and the math</span>
              <br />
              in between.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground text-pretty">
              I'm Tanav — a Statistics &amp; CS student building software systems and quantitative
              trading tools. I love clean code, rigorous backtests, and learning what actually works
              in production.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-all"
              >
                See my projects
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:border-primary hover:text-primary transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-6 inset-x-0 z-10 mx-auto max-w-7xl px-6 lg:px-10 hidden md:flex items-end justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <span>Scroll ↓</span>
        </div>
      </section>

      <section className="border-y border-border/40 bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.v}>
              <div className="font-display text-4xl md:text-5xl font-semibold text-primary">
                {s.k}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground font-mono">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              /01 — Selected work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Things I've built
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden sm:inline-block text-sm text-muted-foreground hover:text-primary"
          >
            All projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              tag: "Quant",
              title: "Mean-Reversion Engine",
              desc: "Python backtester for pairs-trading on S&P 500 equities. Sharpe 1.4 over 5y.",
            },
            {
              tag: "Devtools",
              title: "TickStream",
              desc: "Low-latency market-data router in Go. Sub-millisecond p99 over WebSocket.",
            },
            {
              tag: "ML",
              title: "Vol Forecaster",
              desc: "LSTM model predicting realized volatility from option-chain features.",
            },
            {
              tag: "Web",
              title: "Portfolio Tracker",
              desc: "Full-stack app: live P&L, broker imports, tax-lot accounting. ~600 users.",
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative p-8 rounded-xl border border-border/60 bg-surface/30 hover:border-primary/60 hover:bg-surface transition-all"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  {p.tag}
                </span>
                <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
              <h3 className="font-display text-3xl font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
