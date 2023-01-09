import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrusteeService } from 'src/app/shared/trsutee.service';
import { ITrustee } from './trusteeInteface';


@Component({
  selector: 'app-trustee-list',
  templateUrl: './trustee-list.component.html',
  styleUrls: ['./trustee-list.component.css']
})
export class TrusteeListComponent {


  inp:string='';
title:string='';
href:string='';


constructor(private trusteeService:TrusteeService,private router:Router){}


ngOnInit(): void {
  this.href=this.router.url;
    this.getFuntion();
   
  }
;





trsuteeList:ITrustee[]=[];

getFuntion(){
this.trusteeService.getTrustee().subscribe((data:ITrustee[])=>{
 
  this.trsuteeList=data;
  this.filteredList=data;
 
})
}

filteredList:any=this.trsuteeList;

filter(){
  this.filteredList=[];
  for(let i=0;i<this.trsuteeList.length;i++){
    if(this.trsuteeList[i].name.includes(this.inp)){
        console.log(this.trsuteeList[i]);
      this.filteredList.push(this.trsuteeList[i]);
    }
  }
}









newTrustee():void{
  this.trusteeService.changeSelectedTrustee(this.trusteeService.newTrustee());
  this.router.navigate(['trustees','addTrustee']);
}

trusteeSelected(trustee:ITrustee):void{
  this.trusteeService.changeSelectedTrustee(trustee);
}










}
