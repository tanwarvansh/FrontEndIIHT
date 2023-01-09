import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { GenericValidator } from '../shared/genericvalidator';
import { ProductService } from '../shared/product.service';
import { clearCurrentProduct, createProduct, deleteProduct, updateProduct } from '../state/products/product.actions';
import { getCurrentProduct } from '../state/products/product.selectors';
import { Category, Product } from './product.component';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit ,OnDestroy{

  // constructor(private productService:ProductService){}
  
  

  product:Product|null|undefined={
    id:1,
    name:"a",
    price:"b",
    imageUrl:"c",
    rating:0,
    category:Category.Kitchen
  };

  // product!:Product|null|undefined;

  pageTitle='Edit Product';
  errorMessage='';
  product$!:Observable<Product|null | undefined> ;
  addProduct!: FormGroup;
  sub!:Subscription;

  displayMessage: {[key:string]:string}={};
  private validationMessages!:{[key:string]:{[key:string]:string}};
  private genericValidator!:GenericValidator;
  constructor(private formBuilder:FormBuilder,private router:Router,private productService:ProductService,private store:Store){

  this.validationMessages={

    name:{
      required:'Product name is required ',
      minLength:'Product name must have 3 characters',
      maxLength:'Product name must have less than  equal to 10 chars'
    },
    category:{
      required:'Category is required'
    },
    price:{
      required:'Price is required'
    },image:{
      required:'Image is required'
    },rating:{
      required:'Rating is required'
    },


    };




  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

  ngOnInit(): void {
    console.log("in add product",this.product);
    
    this.addProduct=this.formBuilder.group({
      id: [],
      name: ['abc',[ Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      category:[Category.Kitchen,[Validators.required]],
      price:['',[Validators.required]],
      image:['',[Validators.required]],
      rating:[3,[Validators.required]]
    })

    console.log("add form created for product",this.addProduct.value);


    this.product$ = this.store.select(getCurrentProduct)
      .pipe(
        tap(currentProduct => this.displayProduct(currentProduct))
      );

      this.product$.subscribe(data=>this.product=data);

      this.addProduct.valueChanges.subscribe(
        ()=>this.displayMessage=
        this.genericValidator.processMessages(this.addProduct)
      );

      this.addProduct.valueChanges.subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addProduct));

  
  }

  get id(){
    return this.addProduct.get("id");
  }

  get name(){
    return this.addProduct.get("name");
    }

  get image(){
    return this.addProduct.get("image");
    }
  get price(){
    return this.addProduct.get("price");
      }
  get category(){
      return this.addProduct.get("category");
        }
  get rating(){
      return this.addProduct.get("rating");
        }



        displayProduct(productParam: Product |null |undefined):void{

          this.product = productParam;
          if(this.product){
       //reset the form to its original
           this.addProduct.reset();
       
           if(this.product.id==0){
             this.pageTitle='Add Product';
           }
           else{
       
             this.pageTitle=`Edit Product: ${this.product.name}`;
       
           }


 this.addProduct.patchValue({
  id:this.product.id,
   name:this.product.name,
   image:this.product.imageUrl,
   rating:this.product.rating,
   price:this.product.price,
   category:this.product.category


 })


   }

  }

  saveProduct(originalProduct:Product):void{

    if(this.addProduct.valid){
      if(this.addProduct.dirty){
        //copy over all of the orginal product properties
        //we arecopying data from teh addform
        //{...} it ensures that values are not lost ids are retained
        const product={...originalProduct,...this.addProduct.value};

      if(product.id===0){
        this.store.dispatch(createProduct({product}));
        // this.productService.createProduct(product).subscribe(
        //   (resp)=>this.productService.changeSelectedProduct(resp),
        //   (err)=>this.errorMessage=err
        // );

     }
     else{

      this.store.dispatch(updateProduct({product}));
      // this.productService.updateProduct(product).subscribe(
      //  resp=>this.productService.changeSelectedProduct(resp),
      //  err=>this.errorMessage=err      );

     }
      }


    }
    this.router.navigate(['products'])
  }










  blur():void{
    // this.displayMessage=this.genericValidator.processMessages(this.addProduct);
  
    }
    
  
    deleteProduct(prod:Product):void{

      if(prod && prod.id){
  
        if(confirm(`Are you sure you want to delete ${prod.name} details`)){
  
          this.store.dispatch(deleteProduct({productId:prod.id}));
          
          // this.productService.deleteProduct(prod.id).subscribe(
          //   resp=>this.productService.changeSelectedProduct(null),
          //   err=>this.errorMessage=err
          // );
          // this.router.navigate(['products']);
        }
        else{
          //no need to delete the product
          // this.productService.changeSelectedProduct(null)
          this.store.dispatch(clearCurrentProduct());
        }
      }
  
    }




}
