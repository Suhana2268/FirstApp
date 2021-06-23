import { Component, OnInit, EventEmitter, Input,  Output } from '@angular/core';
import { ProductDetails } from '../product/product-details';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {


  @Input()  cartCount:number = 0;
  cartService:CartService;
  
 


  constructor(cs:CartService) {
    this.cartService =cs;
  
  }
  




  ngOnInit(): void {
  }

  

  getAllProducts():ProductDetails[] {
    console.log(this.cartService.getAllProducts());
    let count = this.cartService.getCartNumber();

    return this.cartService.getAllProducts();

  }

  


  

}
