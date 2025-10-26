import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Avatar, AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-header-component',
  imports: [

    MenubarModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    Ripple,
    BadgeModule,
    AvatarModule

  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  navItems: MenuItem[];

  constructor() {
    this.navItems = [
      { label: 'Hombre', styleClass: 'text-black dark:text-white' },
      { label: 'Mujer', styleClass: 'text-black dark:text-white' },
      { label: 'Accesorios', styleClass: 'text-black dark:text-white' }
    ];
  }
}
