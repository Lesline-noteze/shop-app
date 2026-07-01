import { Component,signal } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { product } from '../../models/product';
import { CurrencyPipe, JsonPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem, UpperCasePipe , JsonPipe, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {

  products= signal<product[]>([
    { 
      id:1,
      name:'robe tra',
      description:'Tissé à la main , motifs bamiléké',
      soldeprice:22000,
      regularprice:28000,
      imageurl:'/assets/products/img1.jpeg',
      createdAt: new Date('2026-01-15'),
      categories:['vêtement', 'femme','traditionnel']
    },
    { 
      id:2,
      name:'robe traditionnelle',
      description:'Tissé à la main , motifs bamiléké',
      soldeprice:22000,
      regularprice:28000,
      imageurl:'/assets/products/img2.jpeg',
      createdAt: new Date('2026-01-15'),
      categories:['vêtement', 'femme','traditionnel']
    },
    { 
      id:3,
      name:'robe traditionnelle',
      description:'Tissé à la main , motifs bamiléké',
      soldeprice:22000,
      regularprice:28000,
      imageurl:'/assets/products/img3.jpeg',
      createdAt: new Date('2026-01-15'),
      categories:['vêtement', 'femme','traditionnel']
    },
    { 
      id:4,
      name:'robe traditionnelle',
      description:'Tissé à la main , motifs bamiléké',
      soldeprice:22000,
      regularprice:28000,
      imageurl:'/assets/products/img4.jpeg',
      createdAt: new Date('2026-01-15'),
      categories:['vêtement', 'femme','traditionnel']
    },
    { 
      id:5,
      name:'robe traditionnelle',
      description:'Tissé à la main , motifs bamiléké',
      soldeprice:22000,
      regularprice:28000,
      imageurl:'/assets/products/img5.jpeg',
      createdAt: new Date('2026-01-15'),
      categories:['vêtement', 'femme','traditionnel']
    },
    { 
      id:6,
      name:'robe traditionnelle',
      description:'Tissé à la main , motifs bamiléké',
      soldeprice:22000,
      regularprice:28000,
      imageurl:'/assets/products/img6.jpeg',
      createdAt: new Date('2026-01-15'),
      categories:['vêtement', 'femme','traditionnel']
    },
    { 
      id:7,
      name:'robe traditionnelle',
      description:'Tissé à la main , motifs bamiléké',
      soldeprice:22000,
      regularprice:28000,
      imageurl:'/assets/products/img7.jpeg',
      createdAt: new Date('2026-01-15'),
      categories:['vêtement', 'femme','traditionnel']
    },
    { 
      id:8,
      name:'robe traditionnelle',
      description:'Tissé à la main , motifs bamiléké',
      soldeprice:22000,
      regularprice:28000,
      imageurl:'/assets/products/img8.jpeg',
      createdAt: new Date('2026-01-15'),
      categories:['vêtement', 'femme','traditionnel']
    }

    
  ])
  



}
