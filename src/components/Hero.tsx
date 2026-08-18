import { profile } from '../data/profile';
import { GitHubIcon } from './Icons';

export function Hero() {
  return (
    <section className='px-6 pt-24 pb-20 text-center'>
      <div className='mx-auto max-w-5xl'>
        {profile.availability && (
          <span className='mb-6 inline-block rounded-full bg-indigo-50 px-3.5 py-1.5 text-sm font-semibold tracking-wide text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'>
            {profile.availability}
          </span>
        )}

        <h1 className='text-4xl leading-[1.1] font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-[3.4rem] dark:text-slate-50'>
          Hi, I&rsquo;m {profile.name.split(' ')[0]}.
        </h1>

        <p className='mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400'>
          {profile.summary}
        </p>

        <div className='mt-9 flex flex-wrap justify-center gap-3.5'>
          <a
            href={profile.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-[10px] bg-slate-900 px-6 py-3 font-semibold text-white transition hover:-translate-y-px hover:bg-black dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-white'>
            <GitHubIcon className='h-[18px] w-[18px]' />
            View GitHub
          </a>
          <a
            href='#projects'
            className='inline-flex items-center gap-2 rounded-[10px] border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-px hover:border-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600'>
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
}
