import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZardUITheme } from '@shared/services/zard-ui-theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  readonly #uiTheme = inject(ZardUITheme);

  ngOnInit(): void {
    this.#uiTheme.initTheme();
  }
}
