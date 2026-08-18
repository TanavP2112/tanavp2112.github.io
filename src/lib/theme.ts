export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'

/** Dark unless the visitor has explicitly chosen light before. */
export function getStoredTheme(): Theme {
  return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  localStorage.setItem(STORAGE_KEY, theme)
}
