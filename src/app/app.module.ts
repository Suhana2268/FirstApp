import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from 'src/demo/demo.component';
import { StockComponent } from 'src/stock/stock.component';
import { TaskComponent } from 'src/task2/task.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { DescriptionPipe } from './all-products/description.pipe';
import { ChildComponent } from './child/child.component';
import { SeedComponent } from './seed/seed.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { PlantComponent } from './plant/plant.component';

const appRoot: Routes = 
[
 {path: 'seed', component: SeedComponent},
  {path: 'cart', component: CartComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'plant', component: PlantComponent},
  {path: 'login', component:LoginComponent}
  

];


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    StockComponent,
    TaskComponent,
    AllProductsComponent,
    DescriptionPipe,
    ChildComponent,
    SeedComponent,
    CartComponent,
    LoginComponent,
    AdminComponent,
    PlantComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AdminComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
