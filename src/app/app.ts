import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkMode } from '@shared/services/dark-mode';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class App implements OnInit {
  private readonly darkMode = inject(DarkMode);

  ngOnInit(): void {
    this.darkMode.initTheme();
  }
}
