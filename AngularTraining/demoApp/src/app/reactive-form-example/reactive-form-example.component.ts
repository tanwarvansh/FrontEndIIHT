import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent implements OnInit {

 dateOfPublishing:string|null;
  bookForm!:FormGroup;
  constructor(formBuilder:FormBuilder,datepipe:DatePipe){
    const dateFormat="dd/mm/yyyy";
    this.dateOfPublishing=datepipe.transform(new Date().setDate(new Date().getDate()),dateFormat);
    
    
    this.bookForm=formBuilder.group({

      id:['1',[Validators.required,Validators.max(100)]],
      title:['Elements',[Validators.required,Validators.minLength(5)]],
    
      author:formBuilder.group({
        name:['R.S. Agarwal',[Validators.required,Validators.minLength(5)]],
        email:['rsagarwal@gmail.com',[Validators.required]]

      }),
      dateOf:["2022-02-02",[Validators.required]]
    })






  }

  get id(){
    return this.bookForm.get('id');
  }
  get name(){
    return this.bookForm.get('title');
  }

  get dateOf(){
    return this.bookForm.get('dateOf');
  }

  get city(){
    return this.bookForm.get('author')?.get('name');
  }
  get state(){
    return this.bookForm.get('author')?.get('email');
  }

  
  
  ngOnInit(): void {
   
  }





  // empForm=new FormGroup({
  //   id:new FormControl(),
  //   firstname:new FormControl(),
  //   lastname:new FormControl()
  // });


  onSubmit(){
    console.log(this.bookForm.value);

  }

}
