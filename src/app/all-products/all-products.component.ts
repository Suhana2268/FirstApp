import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductDetails } from '../product/product-details';
import { ProductComponent } from '../product/product.component';
import { SeedComponent } from '../seed/seed.component';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  
  

  //products: any;
 
/**  constructor() { 
    this.products = [{
      name: 'Croton Plant', cost:100, rating:4,description:'Croton Plant', imagePath: 'assets/images/Croton-Colorful-Houseplants-Costa-Farms.jpg'}
      ,
     { name: 'Mango Plant', cost:100, rating:4,description:'Mango plant', imagePath: 'assets/images/mango-pot.jpg'
    },{name: 'Alovera Plant', cost:100, rating:4,description:'Alovera', imagePath: 'assets/images/aloe-vera-potted-plant-aloe__0653978_pe708207_s5.webp'
   },{ name: 'Mint Plant', cost:100, rating:4,description:'Mint', imagePath: 'assets/images/mint-800x800.jpg'
   },{ name: 'Rose Plant', cost:100, rating:4,description:'Rose Plant', imagePath: 'assets/images/nurserylive-plants-rose-yellow-plant-16969267118220.jpg'
   },
  {
    name: 'Coco Plant', cost:100, rating:4,description:'Coco Plant', imagePath: 'assets/images/r9329-6_cocos_nucifera_-_coco_loco.jpg'
   
  }, 
{
  name: 'Cactus Plant', cost:100, rating:4,description:'Cactus Plant', imagePath: 'assets/images/Elongated-Cactus-plant.jpg' 
  
}, {
  name: 'Parsley Herb', cost:100, rating:4,description:'Parsley Herb', imagePath: 'assets/images/parseley.jpg' 
  
},
{
  name: 'Lilly Herb', cost:100, rating:4,description:'Lilly Herb', imagePath: 'assets/images/white-crinum-lily-flower-bulbs-set-of-10-239406-1.jpg' 
  
}]
    
  }

*/

  ngOnInit(): void {
  }

  cartCount:number=0;
  cartService:CartService;
  constructor(cs:CartService) {
    this.cartService=cs;
   }

   getCartNumber():number{
    this.cartCount=this.cartService.getCartNumber();
    return this.cartCount;
  }
  

}
