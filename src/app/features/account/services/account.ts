import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../../../core/env/env';

@Injectable({
  providedIn: 'root',
})
export class Account {
  http = inject(HttpClient);
  getLoggedUSerData() {
    this.http.get(`${env.baseURL}/auth/profile-data`)
  }
}
