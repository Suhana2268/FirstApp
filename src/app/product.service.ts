import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from './product/product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  
  plantList:ProductDetails[] = [];
  seedList:ProductDetails[] = [];


  private address = 'http://localhost:9097';
  private getAllPlants_endpoint = this.address+'/onlinenursery/plant/plants';
  private getAllSeeds_endpoint = this.address+'/onlinenursery/seed/seeds';
  constructor(private http:HttpClient) { }


  addNewProduct(product:ProductDetails) {
    if(product.category === "Plant") {
      this.plantList.push(product);
    }
    else if(product.category === "Seed"){
      this.seedList.push(product);
    }

  }
  getAllPlants():Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>
    (`${this.getAllPlants_endpoint}`);
    

  }

  createPlant(product:ProductDetails):Observable<Object>
  {
    return this.http.post<ProductDetails>
    (`${this.getAllPlants_endpoint}`, product);
  }

  getAllSeeds():ProductDetails[] {
    return this.seedList;
  }
  

}

