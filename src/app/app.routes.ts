import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../app/layouts/app-layout/appLayout').then((m) => m.AppLayout),
  },
];
