import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { ZardCardComponent } from '@shared/components/card/card.component';
import { Theme, ThemeType, ZardUITheme } from '@shared/services/zard-ui-theme';

@Component({
  selector: 'app-start-page',
  imports: [ZardButtonComponent, ZardCardComponent],
  templateUrl: './start-page.html',
})
export class StartPage {
  readonly #appTitle = inject(Title);
  readonly #uiTheme = inject(ZardUITheme);
  protected readonly title = signal(this.#appTitle.getTitle());

  protected toggleTheme(): void {
    this.#uiTheme.toggleTheme();
  }

  protected getCounterTheme(): ThemeType {
    return this.#uiTheme.getCurrentTheme() === Theme.dark
      ? Theme.light
      : Theme.dark;
  }
}
