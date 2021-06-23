import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { ProductDetails } from '../product/product-details';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  cart:number = 0;
  plants !: ProductDetails[];
  Plant:ProductDetails = new ProductDetails('',0,'',0,'','');
 

  __productService:ProductService;
  constructor(ps:ProductService, private cartService:CartService) { 
    this.__productService = ps;
    
  }
 


  ngOnInit(): void {
    this.getAllPlants1();
  }


  addToCart(product:ProductDetails) {
    this.cartService.addToCart(product);
  
   }
   
   share(name:string) {
     
     console.log(name+" shared");
   }

   getAllPlants1() {
    this.__productService.getAllPlants().subscribe( data =>{
      this.plants = data;
  },
    err=> {
      console.log(err.error);
    }
    
    );
    return this.plants;   
  }


}
