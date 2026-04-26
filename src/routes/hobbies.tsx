import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/hobbies")({
  head: () => ({
    meta: [
      { title: "Hobbies — Jane Doe" },
      { name: "description", content: "Pottery, running, sourdough, generative art and other things I do when I'm not at a keyboard." },
      { property: "og:title", content: "Hobbies — Jane Doe" },
      { property: "og:description", content: "What I do when I'm not at a keyboard." },
    ],
  }),
  component: HobbiesPage,
});

const hobbies = [
  {
    icon: "✦",
    title: "Generative art",
    span: "since 2019",
    desc: "Mostly p5.js and shaders. I post a sketch most weekends; some of the better ones end up plotted with an AxiDraw on heavyweight paper.",
  },
  {
    icon: "◐",
    title: "Pottery",
    span: "since 2021",
    desc: "Wheel-thrown stoneware, mostly mugs and small vases. I like glazes that misbehave in the kiln.",
  },
  {
    icon: "⏱",
    title: "Trail running",
    span: "since 2018",
    desc: "Slowly. Mostly the trails around Grunewald. Two half-marathons; one full one I'd rather not talk about.",
  },
  {
    icon: "✿",
    title: "Sourdough",
    span: "since 2020",
    desc: "Maintainer of one (1) starter, named Bastian. He's older than my last three side projects combined.",
  },
  {
    icon: "♪",
    title: "Modular synths",
    span: "since 2023",
    desc: "Tiny rack, big patch cables. Ambient drones for focus, plus the occasional terrible techno experiment.",
  },
  {
    icon: "✎",
    title: "Writing",
    span: "since forever",
    desc: "Short essays on engineering culture, post-mortems written for non-engineers, and a half-finished novel.",
  },
];

function HobbiesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 lg:pt-32 pb-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6">/04 — Outside the editor</p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter max-w-4xl text-balance leading-[1]">
          The things that keep me <span className="text-primary">interesting</span> at dinner.
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
