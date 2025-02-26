import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() like = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  share(platform: string, product: any): void {
    const productUrl = encodeURIComponent(product.link);
    let shareUrl = '';

    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${productUrl}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${productUrl}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  }
}
