import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadComponent: () =>
      import('../app/layouts/auth-layout/auth-layout').then(
        (c) => c.AuthLayout
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('../app/core/auth/pages/login/login').then((c) => c.Login),
      },
    ],
  },
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
];
