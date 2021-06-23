import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product/product-details';
import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AdminComponent implements OnInit {


 __productService:ProductService;

  constructor(ps:ProductService) { 
    this.__productService = ps;
  }

  productModel:ProductDetails = new ProductDetails('',0,'',0,'','');
  onSubmit()
  {
    console.log(this.productModel.commonName);
    this.__productService.addNewProduct(this.productModel);
  }

  ngOnInit(): void {
  }

  

}
