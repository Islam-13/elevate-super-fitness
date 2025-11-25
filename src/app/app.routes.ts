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
            '../app/features/meals-categories/components/ui/healthy-details/healthy-details'
          ).then((m) => m.HealthyDetails),
      },
    ],
  },
];
