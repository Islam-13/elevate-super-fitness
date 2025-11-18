
import { Component, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-toggle',
  imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass],
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
})
export class Toggle {
   @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e): void {
        this.drawerRef.close(e);
    }

    visible= false;
}
