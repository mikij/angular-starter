import { Component, inject, signal } from '@angular/core';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { ZardCardComponent } from '@shared/components/card/card.component';
import { DarkMode } from '@shared/services/dark-mode';

@Component({
  selector: 'app-start-page',
  imports: [ZardButtonComponent, ZardCardComponent],
  templateUrl: './start-page.html',
})
export class StartPage {
  protected readonly title = signal('myapp');
  protected readonly disabled = signal(false);
  private readonly darkMode = inject(DarkMode);

  protected toggleTheme(): void {
    this.darkMode.toggleTheme();
  }

  protected getCurrentTheme(): 'light' | 'dark' {
    return this.darkMode.getCurrentTheme();
  }
}
