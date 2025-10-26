import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-feature-collections-component',
  imports: [ButtonModule],
  templateUrl: './feature-collections-component.html',
  styleUrl: './feature-collections-component.scss',
})
export class FeatureCollectionsComponent {

  collections = [
    {
      title: 'Colaboración Exclusiva: Vexx',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH9t9hLjPGipdD-D2Cn5pr3ryFNAy2BG5HrtIrkkfi5IaUa0GQltIb0o3TbogxDkUXcMEcn4arq5p5h4PW4fLh03ZZYBfLx7Xv6cmfnsfbwhUnQ7uA0KynsVihleSNsWgEa2y5cfmGpQMUgJVjzoj_0hWnJNXmQx_CFhbm8qWLLXewBqazY9F4Ckokb8Zp2pL6XPamB0Lmpnl6uYXLqRXgFvCp7c4dtOZaCvmuhFwNba_Jv1L0qr7NL2ZX19AgPzjLEr8EaBWrCKcQ',
      alt: 'A male model wearing a unique graphic t-shirt from an exclusive artist collaboration.'
    },
    {
      title: 'Esenciales Urbanos',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLq6HOtvvTzD24DTUN2hMuHprX9lNnErw6CXeXOwntAdVwutLLCwG851jYA-kfGpeoFfSKY4iVKRgALvj3nxB8Je1nFUgfCt2TSpMHswjQ0glLQx7Hm2FSHsp3I39wbfqGOfx1RjIWVTTl3zcyNnSAaunNeCxXwsKUNK1yrHT79nFFfXY9i5zBxrvLtDdNwohycv8lo8_2LlsOGj9YVH8Ya8c9sDyT3qc9gHGqeyySpuQgM81NUhNdhVeUlN65ceXYOK0pU56ybP58',
      alt: 'A diverse group of friends in an urban environment, showcasing essential streetwear items.'
    },
    {
      title: 'Línea Denim Premium',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9-nyMfKKe9gsbjdYpTwJiLaN2qFk0nRzRiZkLVJpIW1kYkv3ctgS3WLsCE5PEZaiLmSdvpStJGZJndFqSSdxyMrz9HfSZ4gGbnXAFkIn3tgN657sdI23dexVuo4puKbzX0Ix37Li-RRGv82_Dj4x5VoU4S2UsdDrcBnwqrNs2hurtPrv9LGqJa7mmm7PhCnULaF5Hddfh_bfD0gjOc85O3MfKz2r7D7gGZNdyMj-vrReYjdyjp3ozwSjD-2yKP-hSZ2FMaL_tGzcL',
      alt: 'Close-up shot of high-quality denim fabric and stitching on a pair of jeans.'
    }
  ];
}
