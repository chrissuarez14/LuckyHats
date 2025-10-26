import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-newletter-singup-component',
  imports: [

    InputTextModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './newletter-singup-component.html',
  styleUrl: './newletter-singup-component.scss',
})
export class NewletterSingupComponent {

}
