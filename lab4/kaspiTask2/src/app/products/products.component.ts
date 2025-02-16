import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/products.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input() product!: Product;

  shareOn(platform: 'whatsapp' | 'telegram', link: string) {
    const encodedLink = encodeURIComponent(link);
    let shareUrl = '';

    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${encodedLink}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodedLink}`;
    }

    window.open(shareUrl, '_blank');
  }
  
  openKaspi(link: string) {
    window.open(link, '_blank');
  }
  
}
