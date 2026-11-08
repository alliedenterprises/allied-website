/** localStorage key for the visitor's light/dark choice. */
export const THEME_STORAGE_KEY = 'allied-theme'

/**
 * Runs in <head> before first paint so a saved dark theme
 * doesn't flash light first. Keep it tiny and dependency-free.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`
