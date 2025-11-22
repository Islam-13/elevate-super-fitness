import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../app/layouts/app-layout/appLayout').then((m) => m.AppLayout),
    children: [
      {
        path: 'about',
        loadComponent: () =>
          import('../app/pages/about/about').then((m) => m.About),
      },
    ],
  },
   {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home').then(
            (c) => c.Home
          ),
      },
];
