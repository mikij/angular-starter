import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ZardButtonComponent } from '@shared/zardui/components/button/button.component';
import { ZardCardComponent } from '@shared/zardui/components/card/card.component';
import { ZardIconComponent } from '@shared/zardui/components/icon/icon.component';
import {
  Theme,
  ThemeManager,
  type ThemeType,
} from '@shared/zardui/services/theme-manager';
import { MoonIcon, SunIcon } from 'lucide-angular';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-start-page',
  imports: [ZardButtonComponent, ZardCardComponent, ZardIconComponent],
  templateUrl: './start-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPage {
  readonly #themeManager = inject(ThemeManager);
  protected readonly title = inject(Title);
  protected readonly Moon = MoonIcon;
  protected readonly Sun = SunIcon;

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
    toast.success('Theme Manager', {
      description: 'The theme has been changed...',
      position: 'bottom-center',
    });
  }
}
