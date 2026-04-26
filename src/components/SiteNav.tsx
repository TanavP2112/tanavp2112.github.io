import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Index" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/hobbies", label: "Hobbies" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          <span className="font-display font-semibold tracking-tight text-lg">
            alex<span className="text-primary">.</span>chen
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "px-4 py-2 text-sm font-medium text-primary rounded-md" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="mailto:alex.chen@example.com"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            Hire me
            <span aria-hidden>→</span>
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/40 bg-background/95">
          <div className="px-6 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-muted-foreground hover:text-foreground"
                activeProps={{ className: "py-2 text-base text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
