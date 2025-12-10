import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../app/layouts/app-layout/appLayout').then((m) => m.AppLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((c) => c.Home),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../app/pages/about/about').then((m) => m.About),
      },
      {
        path: 'healthy',
        loadComponent: () =>
          import(
            '../app/features/healthy-page/healthy-page'
          ).then((m) => m.HealthyPage),
      },
      {
        path: 'classes',
        loadComponent: () =>
          import(
            '../app/features/classes/classes'
          ).then((m) => m.Classes),
      },
    ],
  },
  {
    path: 'account',
    loadComponent: () =>
      import('../app/features/account/account').then((m) => m.Account),
  },
];
