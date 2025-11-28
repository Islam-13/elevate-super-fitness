import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadComponent: () =>
      import('../app/layouts/auth-layout/auth-layout').then(
        (c) => c.AuthLayout
      ),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('../app/features/auth/pages/login/login').then((c) => c.Login),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../app/features/auth/pages/register/register').then(
            (c) => c.Register
          ),
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
