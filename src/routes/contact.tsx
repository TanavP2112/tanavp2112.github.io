import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ThreeRibbon } from "@/components/ThreeRibbon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jane Doe" },
      { name: "description", content: "Get in touch about senior or staff engineering roles, collaborations, or just to say hello." },
      { property: "og:title", content: "Contact — Jane Doe" },
      { property: "og:description", content: "Reach out about roles, collaborations, or anything else." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-50"><ThreeRibbon /></div>
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 pt-24 lg:pt-32 pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6">/05 — Contact</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter text-balance leading-[1]">
            Let's <span className="text-primary">talk</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
            The fastest path is email. I read every message and reply within two business days — even the ones that are clearly mass outreach (though I'll be more enthusiastic if yours isn't).
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-5">
          <a
            href="mailto:hello@example.com"
            className="group p-8 rounded-xl border border-border/60 bg-surface/30 hover:border-primary/60 transition-all"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Email</p>
            <p className="font-display text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors break-all">
              hello@example.com
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Best for roles, collabs, and longer questions.</p>
          </a>

          <a
            href="#"
            className="group p-8 rounded-xl border border-border/60 bg-surface/30 hover:border-primary/60 transition-all"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Calendar</p>
            <p className="font-display text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors">
              Book a 20-min intro
            </p>
            <p className="mt-2 text-sm text-muted-foreground">For recruiters with a specific role in mind.</p>
          </a>

          <a
            href="#"
            className="group p-8 rounded-xl border border-border/60 bg-surface/30 hover:border-primary/60 transition-all"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">GitHub</p>
            <p className="font-display text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors">
              @janedoe
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Open-source projects and weekend experiments.</p>
          </a>

          <a
            href="#"
            className="group p-8 rounded-xl border border-border/60 bg-surface/30 hover:border-primary/60 transition-all"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">LinkedIn</p>
            <p className="font-display text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors">
              /in/janedoe
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Full work history and recommendations.</p>
          </a>
        </div>

        <div className="mt-10 p-6 rounded-xl border border-primary/30 bg-primary/5">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">A note for recruiters</p>
          <p className="text-foreground/90 max-w-3xl">
            I'm currently most interested in <span className="text-primary font-semibold">senior or staff IC roles</span> at small-to-mid-sized product companies, ideally remote-first within ±3 hours of CET. I'm not actively interviewing for management roles or agency work. Thanks for understanding!
          </p>
        </div>
      </section>
    </PageShell>
  );
}
