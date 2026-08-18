import type { Project } from '../data/projects'
import { ArrowUpRightIcon, ICONS } from './Icons'

export function ProjectCard({ project }: { project: Project }) {
  const Icon = ICONS[project.icon]

  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(20,23,31,0.08)] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
      <div className="mb-3.5 flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold tracking-wider text-slate-600 uppercase dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
          {project.tag}
        </span>
      </div>

      <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
        {project.name}
      </h3>
      <p className="mt-2 grow text-[0.96rem] leading-relaxed text-slate-600 dark:text-slate-400">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {tech}
          </li>
        ))}
      </ul>

      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 font-semibold text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        {project.linkType === 'repo' ? 'View Repo' : 'Visit Site'}
        <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="sr-only"> ({project.name})</span>
      </a>
    </article>
  )
}
