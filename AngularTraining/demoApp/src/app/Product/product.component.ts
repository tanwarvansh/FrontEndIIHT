import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoggingServie } from 'src/app/shared/logging.service';
import { ProductService } from 'src/app/shared/product.service';
import { initializeCurrentProduct, loadProducts, setCurrentProduct } from '../state/products/product.actions';
import { getCurrentProduct, getError, getProducts } from '../state/products/product.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

  // productList=[];
  inp:string='';
title:string='';
href:string='';
products$!:Observable<Product[]>;
selectedProduct$!:Observable<any>;
errorMessage$!:Observable<string>;


constructor(private productService:ProductService,private logginService:LoggingServie,
  private router:Router,private store:Store){}

//  public products$:Observable<Product[]>=this.store.select(getProducts);

ngOnInit(): void {
  console.log("inside init")
  this.href=this.router.url;
  // this.store.dispatch(loadProducts());




this.products$=this.store.select(getProducts);
this.products$.subscribe(data=>{this.filteredList=data;this.productList=data});
this.errorMessage$=this.store.select(getError);

this.store.dispatch(loadProducts());
console.log(this.products$);
console.log(this.filteredList);

this.selectedProduct$=this.store.select(getCurrentProduct);

    // this.getFuntion();
   
  }
;


// @Output() sendData:EventEmitter<Product>=new EventEmitter<Product>();


productList:Product[]=[];
filteredList:any=[];

// getFuntion(){
//   console.log('get funtion');

// // this.productService.getProduct().subscribe((data:Product[])=>{
 
//   this.products$=this.store.select(getProducts);
// this.products$.subscribe(data=>this.filteredList=data);
// this.errorMessage$=this.store.select(getError);

// this.store.dispatch(loadProducts());
// console.log(this.products$);
// console.log(this.filteredList);

// this.selectedProduct$=this.store.select(getCurrentProduct);
 
// // })
// }



filter(){
  this.filteredList=[];
  for(let i=0;i<this.productList.length;i++){
    if(this.productList[i].name.includes(this.inp)){
        console.log(this.productList[i]);
      this.filteredList.push(this.productList[i]);
    }
  }
}


productSend:Product={
  id:0,
  name:"",
  price:"",
  imageUrl:"",
  rating:0,
  category:Category.Kitchen
};




// outputEvent(product:Product){
//   this.logginService.log(product);
//   this.productSend=product;
  // this.sendData.emit(product);

// }


newProduct():void{
  // this.productService.changeSelectedProduct(this.productService.newProduct());
  this.router.navigate(['products','addProduct']);
  // this.store.dispatch(initializeCurrentProduct());
  
}




productSelected(product:Product):void{
  // this.productService.changeSelectedProduct(product);

  this.store.dispatch(setCurrentProduct({currentProductId : product.id}));

}



}

export enum Category{
  Kitchen='Kitchen',
  Electric='Electric',
  HouseHold='HouseHold'
}

export interface Product{
  id:number;
  name:string;
  price:string;
  imageUrl:string;
  rating:number,
  category:Category;
}


