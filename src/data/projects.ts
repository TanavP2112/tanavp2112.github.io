/**
 * Your projects. To add one, append an object to the array below — nothing else
 * needs to change. The grid, cards, and links all read from here.
 */
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
    name: 'Project One',
    summary:
      'A one or two sentence summary of what this project does and the problem it solves for its users.',
    href: 'https://github.com/YOUR-USERNAME/project-one',
    linkType: 'repo',
    tag: 'Web App',
    stack: ['React', 'TypeScript', 'Node.js'],
    icon: 'window',
  },
  {
    name: 'Project Two',
    summary:
      'A one or two sentence summary describing the purpose, scale, or standout technical detail of this project.',
    href: 'https://your-live-site.com',
    linkType: 'live',
    tag: 'Live Site',
    stack: ['Next.js', 'Postgres', 'Tailwind'],
    icon: 'bolt',
  },
  {
    name: 'Project Three',
    summary:
      'A one or two sentence summary explaining what motivated this project and who it is useful for.',
    href: 'https://github.com/YOUR-USERNAME/project-three',
    linkType: 'repo',
    tag: 'CLI / Tool',
    stack: ['Python', 'Rust'],
    icon: 'terminal',
  },
]
