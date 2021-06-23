import { Injectable } from '@angular/core';
import { ProductDetails } from './product/product-details';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartNumber:number = 0;
  constructor() { }

  products: ProductDetails[] = [];

  addToCart(product:ProductDetails) {
    this.products.push(product);
    this.cartNumber = this.products.length;
  }

  getAllProducts():ProductDetails[] {
    return this.products;
  }

  getCartNumber() {
    return this.cartNumber;
  }

}
