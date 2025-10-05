import { Injectable } from '@angular/core';

export enum Theme {
  light = 'light',
  dark = 'dark',
}

export type ThemeType = Theme.light | Theme.dark;

@Injectable({
  providedIn: 'root',
})
export class ZardUITheme {
  private readonly storageKey = 'theme';

  initTheme(): void {
    const savedTheme = localStorage.getItem(this.storageKey);
    const isDark =
      savedTheme === 'dark' ||
      (!savedTheme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    this.applyTheme(isDark ? Theme.dark : Theme.light);
  }

  toggleTheme(): void {
    const currentTheme = this.getCurrentTheme();
    this.applyTheme(currentTheme === Theme.dark ? Theme.light : Theme.dark);
  }

  getCurrentTheme(): ThemeType {
    return (localStorage.getItem(this.storageKey) as ThemeType) || Theme.light;
  }

  private applyTheme(theme: ThemeType): void {
    const html = document.documentElement;
    const isDark = theme === Theme.dark;

    html.classList.toggle('dark', isDark);
    html.setAttribute('data-theme', theme);
    html.style.colorScheme = theme;
    localStorage.setItem(this.storageKey, theme);
  }
}
