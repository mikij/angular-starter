import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { ZardCardComponent } from '@shared/components/card/card.component';
import {
  Theme,
  ThemeManager,
  type ThemeType,
} from '@shared/services/theme-manager';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-start-page',
  imports: [ZardButtonComponent, ZardCardComponent],
  templateUrl: './start-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPage {
  readonly #themeManager = inject(ThemeManager);
  protected readonly title = inject(Title);

  protected toggleTheme(): void {
    this.#themeManager.toggleTheme();
    this.#showToast();
  }

  protected getCounterTheme(): ThemeType {
    return this.#themeManager.getCurrentTheme() === Theme.dark
      ? Theme.light
      : Theme.dark;
  }

  #showToast() {
    toast.success('Theme switcher', {
      description: 'The theme has been changed...',
      position: 'bottom-center',
    });
  }
}
