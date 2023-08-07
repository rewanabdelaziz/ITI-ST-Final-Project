import { Injectable } from '@angular/core';
import { Product } from 'src/Interfaces/Products';

@Injectable({
  providedIn: 'root'
})
export class SharedCartDataService {
private cartProducts:Product[]=[];
private totalCost1=0;
  constructor() { }
  setCartProducts(cartP:Product[]){
    this.cartProducts=cartP;
  }
  getCartProducts(){
    return this.cartProducts;
  }
  GetTotalCost(){
    for(var x=0;x<this.cartProducts.length;x++){
      this.totalCost1+=this.cartProducts[x].price;
    }
    return this.totalCost1;
  }
}
