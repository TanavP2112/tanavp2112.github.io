export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="font-display font-semibold">jane.dev</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Engineer, tinkerer, occasional ceramicist. Building thoughtful software since 2017.
          </p>
        </div>

        <div className="text-sm">
          <p className="font-mono uppercase tracking-widest text-xs text-muted-foreground mb-3">Elsewhere</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition-colors">GitHub ↗</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">LinkedIn ↗</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Read.cv ↗</a></li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-mono uppercase tracking-widest text-xs text-muted-foreground mb-3">Get in touch</p>
          <a href="mailto:hello@example.com" className="block hover:text-primary transition-colors">
            hello@example.com
          </a>
          <p className="mt-2 text-muted-foreground">Berlin · Open to remote</p>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-mono">
          <span>© {new Date().getFullYear()} Jane Doe — All rights reserved</span>
          <span>Built with care · Three.js · TanStack</span>
        </div>
      </div>
    </footer>
  );
}
