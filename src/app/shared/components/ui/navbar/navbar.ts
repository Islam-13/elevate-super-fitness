import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PrimaryBtn } from '../primary-btn/primaryBtn';
import { CommonModule } from '@angular/common';

import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { Drawer } from 'primeng/drawer';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    PrimaryBtn,
    CommonModule,
    DrawerModule,
    ButtonModule,
    Ripple,
    AvatarModule,
    TranslateModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e): void {
    this.drawerRef.close(e);
  }

  visible = false;
}
