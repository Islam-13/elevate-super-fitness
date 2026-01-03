import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { LocalStorageService } from '@shared/services/local-storage.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.get('logged-user');

  if (token)
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

  return next(req);
};
