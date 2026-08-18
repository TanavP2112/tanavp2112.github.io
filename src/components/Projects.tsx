import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section
      id='projects'
      className='border-t border-slate-200 bg-slate-50 px-6 pb-24 dark:border-slate-800 dark:bg-slate-900/40'>
      <div className='mx-auto max-w-5xl'>
        <div className='mx-auto max-w-lg pt-14 pb-12 text-center'>
          <h2 className='text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50'>
            Highlighted Projects
          </h2>
          <p className='mt-3 text-lg text-slate-600 dark:text-slate-400'>
            A few things I&rsquo;ve built and led recently as a technical lead.
            Click each card to visit a repo or website.
          </p>
        </div>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
