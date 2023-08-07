import { Component } from '@angular/core';
import {Product} from '../../Interfaces/Products';
import { SharedCartDataService } from '../shared-cart-data.service';
import { SharedCartArrayService } from '../shared-cart-array.service';
import { FakeProducts } from 'src/Interfaces/FakeProducts';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  cartItems1:Product[]=[];
  cartItems2:FakeProducts[]=[];
  TotalCost1:number=0;
  TotalCost2:number=0;
  TotalCost:number=0.00;

  constructor(private Service:SharedCartDataService,private ServiceFake:SharedCartArrayService){
  this.cartItems1=this.Service.getCartProducts();
  this.cartItems2=this.ServiceFake.getCartArray();
  this.TotalCost1=this.Service.GetTotalCost();
  this.TotalCost2=this.ServiceFake.GetTotalCost();
  // this.TotalCost=this.TotalCost1+this.TotalCost2;
  this.calculateTotalCost();
  }

  calculateTotalCost() {
    let total1 = 0;
    let total2 = 0;

    for (let product of this.cartItems1) {
      total1 += product.price;
    }

    for (let product of this.cartItems2) {
      total2 += product.price;
    }

    this.TotalCost1 = total1;
    this.TotalCost2 = total2;
    this.TotalCost = +(total1 + total2).toFixed(3);
  }

  DeleteProduct(p:Product)
  {
    var DeletedProductIndex=this.cartItems1.findIndex(product=>product.id==p.id);
    if (DeletedProductIndex !== -1) {
      const deletedProduct = this.cartItems1.splice(DeletedProductIndex, 1)[0];
      this.TotalCost -= deletedProduct.price;
      // Update the total cost
      this.calculateTotalCost();
    }
  }
  DeleteProductFromFake(p:FakeProducts)
  {
    var DeletedProductIndex2=this.cartItems2.findIndex(product=>product.id==p.id);
    if (DeletedProductIndex2 !== -1) {
      const deletedProduct = this.cartItems2.splice(DeletedProductIndex2, 1)[0];
      this.TotalCost -= deletedProduct.price;
      // Update the total cost
      this.calculateTotalCost();
    }

  }


}
