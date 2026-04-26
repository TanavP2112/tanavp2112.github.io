import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jane Doe" },
      { name: "description", content: "Engineer, designer, and occasional ceramicist. The short version of how I got here and how I work." },
      { property: "og:title", content: "About — Jane Doe" },
      { property: "og:description", content: "How I got here, how I work, and what I'm looking for next." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { y: "2024 →", t: "Lead Engineer @ Quill", d: "AI-native writing tools." },
  { y: "2022—24", t: "Senior Engineer @ Watershed", d: "Carbon accounting at scale." },
  { y: "2020—22", t: "Engineer @ Stripe", d: "Issuing platform, fraud signals." },
  { y: "2017—20", t: "Founding Engineer @ small startup", d: "Acquired in 2020." },
  { y: "2017", t: "BSc Computer Science, TU Berlin", d: "Thesis on incremental computation." },
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
          Engineer with a designer's eye, and a long memory for production incidents.
        </motion.h1>

        <div className="mt-12 grid md:grid-cols-3 gap-10 text-pretty">
          <div className="md:col-span-2 space-y-5 text-lg text-foreground/90">
            <p>
              I've spent the last eight years building software at the awkward seam where systems engineering meets user experience. I like the boring parts — schemas, error budgets, accessibility audits — and I'll happily delete code I wrote last week if the new shape is better.
            </p>
            <p>
              I'm strongest as the engineer who can lead a small team through a hard zero-to-one and stay around for the boring scaling work afterwards. I write production code, I review pull requests carefully, and I take design reviews seriously.
            </p>
            <p>
              Outside work I throw pottery, run badly, and maintain a couple of small open-source tools. Always happy to chat about distributed systems, type theory, or sourdough.
            </p>
          </div>

          <aside className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Currently</p>
              <p>Berlin, Germany · CET</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Open to</p>
              <p>Senior / Staff IC roles · Remote-first or hybrid Berlin · No relocation</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Likes</p>
              <p>Postgres, Rust, slow software, pair programming, well-written incident reports.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-16 lg:py-24">
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">A rough CV</h2>
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
