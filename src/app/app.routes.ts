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
          import('../app/features/pages/about/about').then((m) => m.About),
      },
    ],
  },
];
