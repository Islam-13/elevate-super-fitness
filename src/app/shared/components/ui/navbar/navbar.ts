import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { PrimaryBtn } from "../primary-btn/primaryBtn";
import { Home } from "../../../../pages/home/home";
import { Hero } from "../../../../features/hero/hero";
import { CommonModule } from '@angular/common';


import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, PrimaryBtn, Home, Hero,CommonModule,DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
 @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e): void {
        this.drawerRef.close(e);
    }

    visible= false;
}
