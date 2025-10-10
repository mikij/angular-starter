import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZardToastComponent } from '@shared/zardui/components/toast/toast.component';
import { ThemeManager } from '@shared/zardui/services/theme-manager';

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
  readonly #uiTheme = inject(ThemeManager);

  ngOnInit(): void {
    this.#uiTheme.initTheme();
  }
}
