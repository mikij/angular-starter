import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { ZardCardComponent } from '@shared/components/card/card.component';
import { DarkMode } from '@shared/services/dark-mode';

@Component({
  selector: 'app-start-page',
  imports: [ZardButtonComponent, ZardCardComponent],
  templateUrl: './start-page.html',
})
export class StartPage {
  readonly #appTitle = inject(Title);
  readonly #darkMode = inject(DarkMode);
  protected readonly title = signal(this.#appTitle.getTitle());

  protected toggleTheme(): void {
    this.#darkMode.toggleTheme();
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.#darkMode.getCurrentTheme();
  }
}
