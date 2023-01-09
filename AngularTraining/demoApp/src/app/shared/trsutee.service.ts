import { Injectable } from "@angular/core";

import { BehaviorSubject, catchError, map, Observable, tap, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ITrustee } from "../Trustee/trusteeInteface";



@Injectable({
    providedIn:'root'
})
export class TrusteeService{
    constructor(private http:HttpClient){}

     private url:string='api/trustees';
     trustees:ITrustee[]=[];


     private selectedTrusteeSource=new BehaviorSubject<ITrustee | null>(null);

     selectedTrusteeChanges$=this.selectedTrusteeSource.asObservable();

    getTrustee():Observable<ITrustee[]>{
      return this.http.get<ITrustee[]>(`${this.url}`).pipe(
        tap(data=> {console.log(data);
          this.trustees=data;
        }),
        catchError(this.errorHandler)
      );
     
    }

    changeSelectedTrustee(selecedTrustee:ITrustee | null):void{
      console.log(selecedTrustee);
      this.selectedTrusteeSource.next(selecedTrustee);
    }


    errorHandler=(err:any)=>{
      let errorMessage:string;

      if(err.error instanceof ErrorEvent){
        errorMessage=`An error has occures ${err.error.message}`;
      }else{
        errorMessage=`Backend error code ${err.status} ${err.body.error}`;
      }

      console.log(err);
      return throwError(errorMessage);
    }



    newTrustee():ITrustee{
      return{
        id:0,
        name:'',
        gender:'',
        countryOfResidence:'',
        passport:'',
        issuanceDate:new Date('2023-01-04'),
        noOfDependents:0
      };
    }


    createTrsutee(trustee:ITrustee):Observable<ITrustee>{
      //headers variable to set request headers
     const headers= new HttpHeaders({'Content-Type':'application/json'});
 
         //newProduct spread across product
       const newTrustee={...trustee,id:null};
 
 
       //return logic starts here
       //http .post method
       //generics method -- IProduct
       //args --3 url , newProduct ,headers
       //this.url -- declared in the class outside the functions
       return     this.http.post<ITrustee>(this.url,newTrustee,{headers})
       .pipe(
         tap(data=>{
 
          console.log('in create new trustee'+ JSON.stringify(data));
          //pushing the new data new Product to the products array
          this.trustees.push(data);
 
         },
         catchError(this.errorHandler)
         )
       )
   }
   //delete  api/events --- delete mapping api/events/1
 
   deleteTrustee(id:number):Observable<{}>{
     const headers= new HttpHeaders({'Content-Type':'application/json'});
 
     //@DeleteMapping deleteAll delete url/id  /api/products/111
     const url= `${this.url}/${id}`;
 
     return this.http.delete<ITrustee>(url,{headers})
     .pipe(
       tap(data=>{
         console.log('deleted trustee'+id);
        const foundIndex = this.trustees.findIndex(item=>item.id===id);
        //if product id is not found means index returned will be -1
        if(foundIndex > -1)
        this.trustees.splice(foundIndex,1);
 
 
       },
       catchError(this.errorHandler))
 
 
     );
 
 
 
 
 
   }
 
 
 
 
   //update a product
   // means two steps -- one when the user selects a particular data from the list and clicks on edit button
   //you can render a new component ProductEditComponent --form with all the required fields
   // name price qty
   //ngOnInit -- it should get the values of the selectedProduct  from the ProductListComponent
   //in that form , pre fill the data from the db with the selected product
   //user will modify
   //user will submit  ,this new product data will be used in http put with the id
 
    updateTrustee(trustee:ITrustee):Observable<ITrustee>{
     const headers= new HttpHeaders({'Content-Type':'application/json'});
 
     //put http method
     const url= `${this.url}/${trustee.id}`;
 
     //logic to call http put method to update the product on the given url
     return this.http.put<ITrustee>(url,trustee, {headers}).pipe(
 
     tap(()=>{console.log('update product'+trustee.id);
     const foundIndex =this.trustees.findIndex(item=>item.id === trustee.id);
     if(foundIndex > -1){
       this.trustees[foundIndex]=trustee;
         }
     }),
     map(()=>trustee),
     catchError(this.errorHandler)
     );
 
 
 
 
 
 
    }
 
 
 
 
 
 }

