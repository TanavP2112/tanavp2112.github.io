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
    name: 'Volatility Model for Kalshi Prediction Markets',
    summary:
      'Structural GARCH quasi-MLE estimating volatility on Kalshi contracts, with signals normalized by conditional volatility. Backtested unconstrained-capital with modeled transaction costs and slippage. No position-size limits, so results are an upper bound on what thin books would actually absorb.',
    href: 'https://github.com/TanavP2112/trading-model-projects/tree/main/pred_market_vn_rev_mom',
    linkType: 'repo',
    tag: 'Quantitative Research',
    stack: ['Python', 'SQL'],
    icon: 'chart',
  },
  {
    name: 'Spatial AI (Gies Disruption Lab)',
    summary:
      'CAD collaboration platform for UIUC students, in collaboration with UIUC Makerlab. Over 900 models uploaded and viewed in VR/AR, with a 3D spatial interface for model discovery and collaboration.',
    href: 'https://spatial-ai.university/',
    linkType: 'live',
    tag: 'UIUC Venture',
    stack: ['Next.js', 'Three.js', 'AWS', 'Tailwind', 'React'],
    icon: 'sparkles',
  },
]
