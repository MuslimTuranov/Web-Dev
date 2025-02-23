import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/products.interface';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  category: string | null = null;
  products: Product[] = [];

  allProducts: Product[] = [
    {
      id: 1,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      name: 'iPhone 16 Pro Max',
      description: 'Apple iPhone 16 Pro Max 256GB',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      category: 'Smartphones',
      likes: 0,
    },
    {
      id: 2,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      name: 'Смартфон Samsung Galaxy S24 Ultra',
      description: 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ серый',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
      category: 'Smartphones',
      likes: 0,
    },
    {
      id: 3,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      name: 'iPhone 16',
      description: 'Смартфон Apple iPhone 16 128Gb черный',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
      category: 'Smartphones',
      likes: 0,
    },
    {
      id: 4,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'Apple MacBook Air 13',
      description: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
      category: 'Laptops',
      likes: 0,
    },
    {
      id: 5,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h62/85527684087838.png?format=gallery-medium',
      name: 'ThundeRobot Zero Ultra XT R15',
      description: 'Ноутбук ThundeRobot Zero Ultra XT R15 15.6" / 32 Гб / SSD 1000 Гб / Win 11 Pro ',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/thunderobot-zero-ultra-xt-r15-15-6-32-gb-ssd-1000-gb-win-11-pro--117753657/?c=750000000',
      category: 'Laptops',
      likes: 0,
    },
    {
      id: 6,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      name: 'Apple Watch SE GPS Gen.2',
      description: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
      category: 'Accessories',
      likes: 0,
    },
    {
      id: 7,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
      name: 'AirPods 4 Active Noise Cancellation',
      description: 'Наушники Apple AirPods 4 Active Noise Cancellation белый',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-airpods-4-active-noise-cancellation-belyi-124333921/?c=750000000',
      category: 'Accessories',
      likes: 0,
    },
    {
      id: 8,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/hcc/64145010163742.jpg?format=gallery-medium',
      name: 'Apple AirPods Max',
      description: 'Наушники Apple AirPods Max черный',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?c=750000000',
      category: 'Accessories',
      likes: 0,
    },
    {
      id: 9,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2c/h90/64386909306910.jpg?format=gallery-medium',
      name: 'Rode NT2-A',
      description: 'Микрофон Rode NT2-A',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/rode-nt2-a-104024632/?c=750000000',
      category: 'Accessories',
      likes: 0,
    },
    {
      id: 10,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd9/h50/86340695162910.jpg?format=gallery-medium',
      name: 'Диван прямой OMAR',
      description: 'Диван прямой OMAR, обивка велюр, 80х180х95 см, белый',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/divan-prjamoi-omar-obivka-veljur-80h180h95-sm-belyi-120655702/?c=750000000',
      category: 'Furniture',
      likes: 0,
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('✅ ProductListComponent загружен!'); // Проверяем, срабатывает ли ngOnInit()
  
    this.route.paramMap.subscribe(params => {
    this.category = params.get('categoryName');
    console.log('Выбранная категория:', this.category); // Проверяем, передаётся ли параметр

    this.products = this.allProducts.filter(p => p.category === this.category);
    console.log('Найденные товары:', this.products); // Проверяем, фильтруются ли товары
    });
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  likeProduct(id: number) {
    const product = this.products.find(p => p.id === id);
    if (product) product.likes++;
  }
}
