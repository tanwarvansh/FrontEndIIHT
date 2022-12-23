import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent {

  // productList=[];
  inp:string='';
title:string='';


@Output() sendData:EventEmitter<Product>=new EventEmitter<Product>();


 product1:Product={
  id:1,
  name:"Gas Stove",
  price:"4000",
  imageUrl:"../../assets/gasStove.webp",
  rating:4,
  category:Category.Kitchen
  }
   product2:Product={
  id:2,
  name:"Samsung Guru",
  price:"4000",
  imageUrl:"../../assets/samsungGuru.avif",
  rating:3,
  category:Category.Electric
}
 product3:Product={
  id:3,
  name:"Nokia 1100",
  price:"3200",
  imageUrl:"../../assets/nokia1100.jpeg",
  rating:2,
  category:Category.Electric
}
 product4:Product={
  id:4,
  name:"Mop",
  price:"1500",
  imageUrl:"../../assets/mop.webp",
  rating:5,
  category:Category.HouseHold
}
 product5:Product={
  id:5,
  name:"Chimney",
  price:"40000",
  imageUrl:"../../assets/chimney.jpeg",
  rating:3.5,
  category:Category.Kitchen
}


productList:any=[this.product1,this.product2,this.product3,this.product4,this.product5];

filteredList:any=this.productList;

filter(){
  this.filteredList=[];
  for(let i=0;i<this.productList.length;i++){
    if(this.productList[i].name.includes(this.inp)){
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


outputEvent(product:Product){
  this.productSend=product;
  // this.sendData.emit(product);

}



}

enum Category{
  Kitchen='kitchen',
  Electric='electric',
  HouseHold='houseHold'
}

interface Product{
  id:number;
  name:string;
  price:string;
  imageUrl:string;
  rating:number,
  category:Category;
}


