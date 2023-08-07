import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{path:"contactus",component:ContactUsComponent},
                        {path:"aboutus",component:AboutUSComponent},
                        {path:"products",component:ProductsComponent},
                        {path:"bestseller",component:BestSellerComponent},
                        {path:"cart",component:CartComponent},
                        {path:"**",component:HomeComponent}
                        ,
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
