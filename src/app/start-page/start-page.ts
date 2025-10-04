import { Component, signal } from '@angular/core';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { ZardCardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'app-start-page',
  imports: [ZardButtonComponent, ZardCardComponent],
  templateUrl: './start-page.html',
})
export class StartPage {
  protected readonly title = signal('myapp');
  protected readonly disabled = signal(false);

  protected onClick() {
    this.title.set('Zard UI');
    this.disabled.set(true);
  }
}
