import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="px-6 py-10 text-center text-[0.95rem] text-slate-600 dark:text-slate-400">
      <p>
        Let&rsquo;s connect on{' '}
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-900 transition-colors hover:text-indigo-600 dark:text-slate-100 dark:hover:text-indigo-400"
        >
          GitHub
        </a>{' '}
        or email me at{' '}
        <a
          href={`mailto:${profile.email}`}
          className="font-semibold text-slate-900 transition-colors hover:text-indigo-600 dark:text-slate-100 dark:hover:text-indigo-400"
        >
          {profile.email}
        </a>
        .
      </p>
    </footer>
  )
}
