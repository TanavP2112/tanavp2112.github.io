import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="grain min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-16">{children}</main>
      <SiteFooter />
    </div>
  );
}
