import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product/product-details';
import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.css']
})


export class SeedComponent implements OnInit {

  cart:number = 0;
  

  __productService:ProductService;

  constructor(ps:ProductService, private cartService: CartService) { 
    this.__productService = ps;
  }


  ngOnInit(): void {
  }

  


getAllSeeds1():ProductDetails[] {
  return this.__productService.getAllSeeds();
}

share(name:string) {
     
  console.log(name+" shared");
}

addToCart(product:ProductDetails) {
  this.cartService.addToCart(product);
  this.cart++;
}

}
