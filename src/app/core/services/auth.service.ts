import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '@env/env';
import { catchError, map } from 'rxjs';
import { LoginData, LoginRes } from '@shared/types/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = env.baseURL;

  login(data: LoginData) {
    return this.http.post<LoginRes>(`${this.baseUrl}/auth/signin`, data).pipe(
      map((res) => res.token),
      catchError((err) => {
        throw err.error.error;
      })
    );
  }
}
