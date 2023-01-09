import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenericValidator } from 'src/app/shared/genericvalidator';
import { TrusteeService } from 'src/app/shared/trsutee.service';
import { ITrustee } from '../trusteeInteface';

export class Country{

  id!:string;
  name!:string;

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }

}

@Component({
  selector: 'app-trustee',
  templateUrl: './trustee.component.html',
  styleUrls: ['./trustee.component.css']
})
export class TrusteeComponent {
   countries:Country[]=[new Country("1","India"),new Country("2","Japan"),new Country("3","Russia")]

  


  trustee:ITrustee|null = {
    id:0,
    name:"",
    gender:"",
    countryOfResidence:'',
    passport:'',
    issuanceDate:new Date(),
    noOfDependents:0

  };

  pageTitle='Edit Trustee';
  errorMessage='';
  addTrustee!: FormGroup;
  sub!:Subscription;

  displayMessage: {[key:string]:string}={};
  private validationMessages!:{[key:string]:{[key:string]:string}};
  private genericValidator!:GenericValidator;
  constructor(private formBuilder:FormBuilder,private router:Router,private trusteeService:TrusteeService){

  this.validationMessages={

    name:{
      required:'Trustee name is required ',
      minLength:'Trustee name must have 3 characters',
      maxLength:'Trustee name must have less than  equal to 10 chars'
    },
    countryOfResidence:{
      required:'Country is required'
    },
    gender:{
      required:'Gender is required'
    },passport:{
      required:'Passport is required'
    },id:{
      required:'Id is required'
    },


    };




  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    
    this.addTrustee=this.formBuilder.group({
      id: [2,Validators.required],
      name: ['Vansh',[ Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      gender: ['',Validators.required],
      countryOfResidence:['',[Validators.required]],
      passport:['',[Validators.required]],
      issuanceDate:['2022-01-01',Validators.required],
      noOfDependents:[3,[Validators.required]]
    })

    this.sub=this.trusteeService.selectedTrusteeChanges$.subscribe(selProd=>this.displayProduct(selProd));
    this.addTrustee.valueChanges.
    subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addTrustee));
  
  }

  get id(){
    return this.addTrustee.get("id");
  }

  get name(){
    return this.addTrustee.get("name");
    }

  get gender(){
    return this.addTrustee.get("gender");
    }

  get countryOfResidence(){
    return this.addTrustee.get("countryOfResidence");
      }

  get passport(){
      return this.addTrustee.get("passport");
        }

  get issuanceDate(){
      return this.addTrustee.get("issuanceDate");
        }

    get noOfDependents(){
      return this.addTrustee.get("noOfDependents");
          }





        displayProduct(productParam:ITrustee |null):void{

          this.trustee = productParam;
          if(this.trustee){
       //reset the form to its original
           this.addTrustee.reset();
       
           if(this.trustee.id==0){
             this.pageTitle='Add Product';
           }
           else{
       
             this.pageTitle=`Edit Product: ${this.trustee.name}`;
       
           }


 this.addTrustee.patchValue({
  id:this.trustee.id,
   name:this.trustee.name,
   gender:this.trustee.gender,
   countryOfResidence:this.trustee.countryOfResidence,
   passport:this.trustee.passport,
   issuanceDate:this.trustee.issuanceDate,
   noOfDependents:this.trustee.noOfDependents


 })


   }

  }

  saveTrustee(originalProduct:ITrustee):void{

    // if(this.addTrustee.valid){
    //   console.log("add trustee valid");
    //   if(this.addTrustee.dirty){
    //     console.log("add trustee valid dirty");
        //copy over all of the orginal product properties
        //we arecopying data from teh addform
        //{...} it ensures that values are not lost ids are retained

        console.log(originalProduct);
        const product={...originalProduct,...this.addTrustee.value};

      if(product.id===0){
        this.trusteeService.createTrsutee(product).subscribe(
          (resp)=>this.trusteeService.changeSelectedTrustee(resp),
          (err)=>this.errorMessage=err
        );

     }
     else{

      this.trusteeService.updateTrustee(product).subscribe(
       resp=>this.trusteeService.changeSelectedTrustee(resp),
       err=>this.errorMessage=err  );

     }
      // }


    // }
    this.router.navigate(['trustees'])
  }










  blur():void{
    this.displayMessage=this.genericValidator.processMessages(this.addTrustee);
  
    }
    
  
    deleteTrustee(prod:ITrustee):void{
      if(prod && prod.id){
  
        if(confirm(`Are you sure you want to delete ${prod.name} details`)){
  
          this.trusteeService.deleteTrustee(prod.id).subscribe(
            resp=>this.trusteeService.changeSelectedTrustee(null),
            err=>this.errorMessage=err
          );
        }
        else{
          //no need to delete the product
          this.trusteeService.changeSelectedTrustee(null)
        }
      }
  
    }

   

}
