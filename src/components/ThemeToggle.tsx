import { useState } from 'react';
import { applyTheme, getStoredTheme, type Theme } from '../lib/theme';
import { MoonIcon, SunIcon } from './Icons';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setTheme(next);
  };

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className='flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-slate-100'>
      {theme === 'dark' ? (
        <SunIcon className='h-[18px] w-[18px]' />
      ) : (
        <MoonIcon className='h-[18px] w-[18px]' />
      )}
    </button>
  );
}
