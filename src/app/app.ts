import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZardToastComponent } from '@shared/components/toast/toast.component';
import { ZardUITheme } from '@shared/services/zard-ui-theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZardToastComponent],
  template: `
    <z-toaster />
    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  readonly #uiTheme = inject(ZardUITheme);

  ngOnInit(): void {
    this.#uiTheme.initTheme();
  }
}
