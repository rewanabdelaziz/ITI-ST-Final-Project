import { Injectable } from '@angular/core';
import { FakeProducts } from 'src/Interfaces/FakeProducts';
@Injectable({
  providedIn: 'root'
})
export class SharedCartArrayService {
  private cartProducts:FakeProducts[]=[];
  private totalCost2=0;
  constructor() { }
  setCartArray(cartP:FakeProducts[]){
    this.cartProducts=cartP;
  }
  getCartArray(){
    return this.cartProducts;
  }
  GetTotalCost(){
    for(var x=0;x<this.cartProducts.length;x++){
      this.totalCost2+=this.cartProducts[x].price;
    }
    return this.totalCost2;
  }
}
