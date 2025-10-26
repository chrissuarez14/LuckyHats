import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-footer-component',
  imports: [ButtonModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
})
export class FooterComponent {

  navigate(socialMedia: string) {
    switch(socialMedia) {
      case 'facebook':
        this.goToFacebook();
        break;
      case 'instagram':
        this.goToInstagram();
        break;
      // You can add more cases for other social media platforms if needed
      default:
        break;
    }
  }

  goToFacebook() {
    window.open('https://www.facebook.com/suarez.64341', '_blank');
  }

  goToInstagram() {
    window.open('https://www.instagram.com/lucky_hats_and_clothes/', '_blank');
  }
}
