/**
 * Theme management utilities for light/dark mode
 */

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "vinyl-collection-theme";

/**
 * Gets the current theme from localStorage
 * Defaults to 'light' if no preference is stored
 *
 * @returns The current theme preference
 */
export function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      return stored;
    }
  } catch (error) {
    console.error("Failed to read theme from localStorage:", error);
  }

  return "light";
}

/**
 * Saves the theme preference to localStorage
 *
 * @param theme - The theme to save
 */
export function setStoredTheme(theme: Theme): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.error("Failed to save theme to localStorage:", error);
  }
}

/**
 * Applies the theme to the document by setting the data-theme attribute
 *
 * @param theme - The theme to apply
 */
export function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.setAttribute("data-theme", theme);
}

/**
 * Initializes the theme on page load
 * Reads from localStorage and applies the stored preference
 *
 * @returns The initialized theme
 */
export function initializeTheme(): Theme {
  const theme = getStoredTheme();
  applyTheme(theme);
  return theme;
}

/**
 * Toggles between light and dark themes
 *
 * @param currentTheme - The current theme
 * @returns The new theme after toggling
 */
export function toggleTheme(currentTheme: Theme): Theme {
  const newTheme: Theme = currentTheme === "light" ? "dark" : "light";
  setStoredTheme(newTheme);
  applyTheme(newTheme);
  return newTheme;
}
