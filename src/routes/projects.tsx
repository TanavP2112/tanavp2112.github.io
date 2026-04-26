import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { ThreeRibbon } from "@/components/ThreeRibbon";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Alex Chen" },
      { name: "description", content: "Quantitative research, trading systems, and full-stack software projects built during my CS & Math studies." },
      { property: "og:title", content: "Projects — Alex Chen" },
      { property: "og:description", content: "Quantitative research, trading systems, and full-stack software projects." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    year: "2025",
    name: "Mean-Reversion Engine",
    role: "Solo build",
    tag: "Quant / Research",
    desc: "A vectorized Python backtester for cointegrated equity pairs in the S&P 500. Walk-forward parameter selection, transaction-cost model, and a live paper-trading bridge through Alpaca.",
    stack: ["Python", "NumPy", "Pandas", "Alpaca API"],
    metric: "1.4",
    metricLabel: "Sharpe (5y BT)",
  },
  {
    year: "2025",
    name: "TickStream",
    role: "Solo build",
    tag: "Devtools / Systems",
    desc: "A low-latency market-data router that fans out normalized ticks from multiple venues over WebSocket. Used internally for my own bots; learned a lot about ring buffers and GC pauses.",
    stack: ["Go", "Redis", "WebSocket"],
    metric: "<1ms",
    metricLabel: "p99 latency",
  },
  {
    year: "2024",
    name: "Vol Forecaster",
    role: "Course project + extension",
    tag: "ML / Finance",
    desc: "An LSTM model that forecasts 5-day realized volatility for SPX using features derived from the option chain (skew, term-structure, IV rank). Beats a GARCH(1,1) baseline by ~12% RMSE.",
    stack: ["PyTorch", "Polars", "yfinance"],
    metric: "+12%",
    metricLabel: "vs GARCH baseline",
  },
  {
    year: "2024",
    name: "Portfolio Tracker",
    role: "Full-stack",
    tag: "Web / SaaS-ish",
    desc: "A self-serve portfolio tracker: live P&L, CSV broker imports, FIFO tax-lot accounting, and a clean React dashboard. Started as a side project; now used by ~600 friends and r/investing folks.",
    stack: ["TypeScript", "React", "Postgres", "tRPC"],
    metric: "600+",
    metricLabel: "Active users",
  },
  {
    year: "2024",
    name: "OrderBook Visualizer",
    role: "Hackathon — 1st place",
    tag: "Hackathon / Viz",
    desc: "Real-time depth-of-book heatmap for crypto exchanges, built in 36 hours. Won 'Best Use of Real-Time Data' at HackTheNorth.",
    stack: ["React", "WebGL", "Rust (WASM)"],
    metric: "🏆",
    metricLabel: "1st place",
  },
  {
    year: "2023",
    name: "Black-Scholes Playground",
    role: "Learning project",
    tag: "Education",
    desc: "An interactive web tool to build intuition for option Greeks. Sliders for spot/vol/rate/time, live re-pricing, and 3D surface plots. My most-starred GitHub repo.",
    stack: ["TypeScript", "D3", "Three.js"],
    metric: "320★",
    metricLabel: "GitHub stars",
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
            Code I've shipped, models I've trained, books I've crashed.
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
                Read more →
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
