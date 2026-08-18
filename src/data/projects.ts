export type Project = {
  /** Card title. */
  name: string
  /** One or two sentences: what it does and who it is for. */
  summary: string
  /** Where the card links to — a public repo or a live site. */
  href: string
  /** Controls the link label: "View Repo" vs "Visit Site". */
  linkType: 'repo' | 'live'
  /** Small label in the card's top-right corner. */
  tag: string
  /** Tech chips, in the order you want them read. */
  stack: string[]
  /** Icon key — see ICONS in src/components/Icons.tsx for the available set. */
  icon: 'window' | 'bolt' | 'terminal' | 'chart' | 'sparkles'
}

export const projects: Project[] = [
  {
    name: 'Structural GARCH Quasi-MLE with Vol-Normalized Signal Backtests',
    summary:
      'A one or two sentence summary of what this project does and the problem it solves for its users.',
    href: 'https://github.com/TanavP2112/trading-model-projects/tree/main/pred_market_vn_rev_mom',
    linkType: 'repo',
    tag: 'Quantitative Research',
    stack: ['React', 'TypeScript', 'Node.js'],
    icon: 'chart',
  },
  {
    name: 'Spatial AI (Gies Disruption Lab)',
    summary:
      'A one or two sentence summary describing the purpose, scale, or standout technical detail of this project.',
    href: 'https://spatial-ai.university/',
    linkType: 'live',
    tag: 'UIUC Venture',
    stack: ['Next.js', 'Postgres', 'Tailwind'],
    icon: 'sparkles',
  },
  {
    name: 'Project Three (WIP)',
    summary:
      'A project currently in the works',
    href: '',
    linkType: 'repo',
    tag: 'WIP',
    stack: [],
    icon: 'terminal',
  },
]
