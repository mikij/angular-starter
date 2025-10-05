import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./start-page/start-page').then(m => m.StartPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
