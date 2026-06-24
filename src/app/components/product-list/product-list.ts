import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {
  products: product[] = [
    { id: 1, name: 'produit 1', price: 25000, image: '/assets/products/img2.jpeg' },
    { id: 2, name: 'robe rouge', price: 15000, image: '/assets/products/img1.jpeg' },
    { id: 2, name: 'robe bleu', price: 15000, image: '/assets/products/im3.jpeg' },
    { id: 1, name: 'robe traditionnelle', price: 25000, image: '/assets/products/img4.jpeg' },
    { id: 2, name: 'robe bleu', price: 15000, image: '/assets/products/img5.jpeg' },
    { id: 2, name: 'robe bleu', price: 15000, image: '/assets/products/img7.jpeg' },
    { id: 2, name: 'robe bleu', price: 15000, image: '/assets/products/img9.jpeg' },
    { id: 2, name: 'robe bleu', price: 15000, image: '/assets/products/img10.jpeg' },
    { id: 2, name: 'robe bleu', price: 15000, image: '/assets/products/img11.jpeg' }



  ]
}
