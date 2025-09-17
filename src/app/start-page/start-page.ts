import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-start-page',
  imports: [],
  templateUrl: './start-page.html',
})
export class StartPage {
  protected readonly title = signal('myapp');
}
