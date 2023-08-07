import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../../Interfaces/Products';
import { FakeProducts } from 'src/Interfaces/FakeProducts';
import { SharedCartArrayService } from '../shared-cart-array.service';
@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent{
  APIproducts: any;

  constructor(private http: HttpClient,private Service:SharedCartArrayService) { 
    http.get('https://fakestoreapi.com/products').subscribe((res) =>{
      this.APIproducts=res;
      // console.log(this.APIproducts);
    })
  }
  addToCartArray:FakeProducts[]=[];
  DeleteProduct(p:FakeProducts)
  {
    var DeletedProductIndex=this.addToCartArray.findIndex(product=>product.id==p.id);
    this.addToCartArray.splice(DeletedProductIndex,1);
  }

  AddToCart(p:FakeProducts)
  {
    this.addToCartArray.push(p);
    this.Service.setCartArray(this.addToCartArray);
    // console.log(this.addToCartArray);
  }

}
