import { profile } from '../data/profile';
import { ThemeToggle } from './ThemeToggle';

export function Nav() {
  return (
    <header className='sticky top-0 z-10 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-6 py-4'>
        <span className='text-base font-bold tracking-tight text-slate-900 dark:text-slate-50'>
          {profile.name}
        </span>
        <div className='flex items-center gap-6'>
          <nav className='hidden gap-7 text-[0.95rem] text-slate-600 sm:flex dark:text-slate-400'>
            <a
              href='#projects'
              className='transition-colors hover:text-slate-900 dark:hover:text-slate-100'>
              Projects
            </a>
            <a
              href={profile.github}
              target='_blank'
              rel='noopener noreferrer'
              className='transition-colors hover:text-slate-900 dark:hover:text-slate-100'>
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className='transition-colors hover:text-slate-900 dark:hover:text-slate-100'>
              Email
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
