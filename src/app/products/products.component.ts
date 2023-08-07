import { Component } from '@angular/core';
import {Product} from '../../Interfaces/Products';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedCartDataService } from '../shared-cart-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  addToCartArray:Product[]=[];

  products:Product[]=[{id:1,name: "Wireless Earbuds",imgSrc:"./assets/images/e1.jpg",model:"Earbuds A",description:"Pair your mobile device and listen to your favorite music while you move around, without being tethered by a headphone cord.",price:60,quantity:2},
  {id:2,name:"Wireless Earbuds",imgSrc:"./assets/images/e2.jpg",model:"Earbuds B",description:"Pair your mobile device and listen to your favorite music while you move around, without being tethered by a headphone cord.",price:70,quantity:0},
  {id:3,name:"Headphone",imgSrc:"./assets/images/8.jpg",model:"Headphone B",description:"Noise-canceling headphones quiet the distracting sounds around you, for a more relaxing listening experience.",price:50,quantity:2},
  {id:4,name:"Headphone",imgSrc:"./assets/images/1.jpg",model:"Headphone A",description:"Pair your mobile device and listen to your favorite music while you move around, without being tethered by a headphone cord.",price:50,quantity:3},
  {id:5,name:"Wireless Earbuds",imgSrc:"./assets/images/e4.jpg",model:"Earbuds A",description:"Pair your mobile device and listen to your favorite music while you move around, without being tethered by a headphone cord.",price:90,quantity:4},
  {id:6,name:"Wireless Earbuds",imgSrc:"./assets/images/e5.jpg",model:"Earbuds C",description:"Pair your mobile device and listen to your favorite music while you move around, without being tethered by a headphone cord.",price:70,quantity:10},
  {id:7,name:"Headphone",imgSrc:"./assets/images/2.jpg",model:"Headphone B",description:"High-performance headphones are a great way to experience audiophile-quality sound at a fraction of the cost of most high-end amp-and-speaker systems.",price:40,quantity:0},
  {id:8,name:"Headphone",imgSrc:"./assets/images/3.jpg",model:"Headphone C",description:"These headphones plug into your phone, DAC, or headphone amp — no wireless options are built in.",price:60,quantity:5},
  {id:9,name:"Headphone",imgSrc:"./assets/images/4.jpg",model:"Headphone A",description:"hHigh-performance headphones are a great way to experience audiophile-quality sound at a fraction of the cost of most high-end amp-and-speaker systems.",price:20,quantity:6},
  {id:10,name:"Headphone",imgSrc:"./assets/images/5.jpg",model:"Headphone B",description:"These headphones plug into your phone, DAC, or headphone amp — no wireless options are built in.",price:40,quantity:15},
  {id:11,name:"Headphone",imgSrc:"./assets/images/6.jpg",model:"Headphone C",description:"Noise-canceling headphones quiet the distracting sounds around you, for a more relaxing listening experience.",price:100,quantity:0},
  {id:12,name:"Headphone",imgSrc:"./assets/images/7.jpg",model:"Headphone A",description:"Pair your mobile device and listen to your favorite music while you move around, without being tethered by a headphone cord.",price:70,quantity:2},
  {id:13,name:"Wireless Earbuds",imgSrc:"./assets/images/e3.jpg",model:"Earbuds B",description:"Pair your mobile device and listen to your favorite music while you move around, without being tethered by a headphone cord.",price:40,quantity:5},
  
]

  FilterdProducts:Product[]=this.products;

  //  if every input search has a button 
  // searchName:string="";
  // searchModel:string="";
  // SearchName(Word:string)
  // {   
  //    this.FilterdProducts=this.products.filter((product)=>{
        
  //         return product.name.toLocaleLowerCase().includes(Word.toLocaleLowerCase()) 
        
        
  //    })
  // }
  // SearchModel(Word:string)
  // {   
  //    this.FilterdProducts=this.products.filter((product)=>{
        
  //         return product.model.toLowerCase().includes(Word.toLocaleLowerCase())
        
  //    })
  // }

  //  if two inputs search has a only one button 
  // searchWord:string="";
  // search(Word:string){
  //   this.FilterdProducts=this.products.filter((product)=>{
        
  //   return product.name.toLowerCase().includes(Word.toLocaleLowerCase())
  //   ||
  //   product.model.toLowerCase().includes(Word.toLocaleLowerCase())
  //    })
  // }
 searchName:string="";
 searchModel:string="";
 search(): void {
  const searchTerm = this.searchName || this.searchModel; 

  
  this.FilterdProducts = this.products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('Search Results:', this.FilterdProducts);
  console.log('Search Name:', this.searchName);
  console.log('Search Model:', this.searchModel);
  console.log('Search term:', searchTerm);
}
  Reset()
  {
    this.FilterdProducts=this.products;
  }

  DeleteProduct(p:Product)
  {
    var DeletedProductIndex=this.addToCartArray.findIndex(product=>product.id==p.id);
    this.addToCartArray.splice(DeletedProductIndex,1);
  }

  AddToCart(p:Product)
  {
    this.addToCartArray.push(p);
    this.Service.setCartProducts(this.addToCartArray);
    // console.log(this.addToCartArray);
  }

  //------------ form -------------------

  // newProduct={id:9,name:"name",imgSrc:"imgsrc",model:"model",description:"description",price:0,quantity:0};
  // newProduct:Product[]=[];
  // submit(p:Product){
  //   this.FilterdProducts.push(p);
  // }
  addProductForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private Service:SharedCartDataService){
    this.addProductForm=this.formBuilder.group({
      Id:[''],
      Name:[''],
      ImgSrc:[''],
      Model:[''],
      Price:[''],
      Description:[''],
      Quantity:['']

    });
  }
  submit(){

      const newProduct: Product = {
      id: this.addProductForm.get('Id')?.value,
      name: this.addProductForm.get('Name')?.value,
      imgSrc: this.addProductForm.get('ImgSrc')?.value,
      model: this.addProductForm.get('Model')?.value,
      description: this.addProductForm.get('Description')?.value,
      price: this.addProductForm.get('Price')?.value,
      quantity: this.addProductForm.get('Quantity')?.value
    };
    // console.log(newProduct)
    this.FilterdProducts.push(newProduct);
    // this.addProductForm.reset();
  }

}
