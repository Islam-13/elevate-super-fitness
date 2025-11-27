import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account {
  changePassword() {}
  changeLanguage() {}
  toggleMood() {}
  logout() {
    console.log('logout');
  }
}
