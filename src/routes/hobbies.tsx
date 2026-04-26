import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/hobbies")({
  head: () => ({
    meta: [
      { title: "Hobbies — Alex Chen" },
      { name: "description", content: "Chess, climbing, generative art, poker, and the side rabbit-holes that keep me curious outside of code." },
      { property: "og:title", content: "Hobbies — Alex Chen" },
      { property: "og:description", content: "What I do when I'm not at a keyboard or a Bloomberg terminal." },
    ],
  }),
  component: HobbiesPage,
});

const hobbies = [
  {
    icon: "♞",
    title: "Chess",
    span: "since 2015",
    desc: "Online rapid ~1850 on Lichess. Big fan of the Catalan as White and the Caro-Kann as Black. Tactics over intuition, mostly because my intuition is bad.",
  },
  {
    icon: "♠",
    title: "Poker",
    span: "since 2022",
    desc: "Low-stakes NLHE cash games with friends. The math of pot odds and equity is what hooked me — and arguably what got me into trading.",
  },
  {
    icon: "▲",
    title: "Bouldering",
    span: "since 2023",
    desc: "Currently projecting V5s. The best mental reset I've found between problem sets. Also great for forearms when typing all day.",
  },
  {
    icon: "✦",
    title: "Generative art",
    span: "since 2022",
    desc: "p5.js sketches and shader experiments. Most of my visualizations for school projects started as weekend doodles.",
  },
  {
    icon: "♪",
    title: "Lo-fi piano",
    span: "since forever",
    desc: "Self-taught. Mostly Ludovico Einaudi and the same four Studio Ghibli pieces I've been working on for years.",
  },
  {
    icon: "✎",
    title: "Writing",
    span: "since 2023",
    desc: "I keep a small blog where I write up trading ideas, paper summaries, and half-baked thoughts on market microstructure.",
  },
];

function HobbiesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 lg:pt-32 pb-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6">/04 — Outside the editor</p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter max-w-4xl text-balance leading-[1]">
          The things that keep me <span className="text-primary">curious</span> away from the screen.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
          Recruiters always ask about the person behind the résumé. Here's the honest answer.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hobbies.map((h, i) => (
            <motion.article
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative p-7 rounded-xl border border-border/60 bg-surface/30 hover:border-primary/60 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl text-primary" aria-hidden>{h.icon}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{h.span}</span>
              </div>
              <h2 className="font-display text-2xl font-semibold mb-2">{h.title}</h2>
              <p className="text-muted-foreground text-pretty">{h.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
