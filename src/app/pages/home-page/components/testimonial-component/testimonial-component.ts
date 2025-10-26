import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-testimonial-component',
  imports: [CommonModule, CardModule, AvatarModule],
  templateUrl: './testimonial-component.html',
  styleUrl: './testimonial-component.scss',
})
export class TestimonialComponent {
  testimonials = [
      {
        name: 'Christian Suarez',
        handle: '@ce_Szzzuares',
        image: 'images/cesuarez.png',
        quote: '"¡La mejor calidad que he encontrado! Se ha convertido en mi marca favorita. Las sudaderas son increíblemente cómodas."',
        alt: 'Profile picture of a satisfied customer.'
      },
      {
        name: 'Luis Suarez',
        handle: '@luizz$$$u4rezz',
        image: 'images/lasuarez.png',
        quote: '"Obsesionado con la nueva colección. El estilo es único y cada pieza se siente premium. ¡Totalmente recomendado!"',
        alt: "Profile picture of an influencer wearing the brand's clothing."
      }
  ];
}
