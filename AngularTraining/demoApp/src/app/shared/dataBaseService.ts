import { Injectable } from "@angular/core";
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { Todo } from "src/todo/todo.model";
import { IEvent } from "../event-bootcamp/event";
import { ITrustee } from "../Trustee/trusteeInteface";


@Injectable({
    providedIn:'root'
})
export class DBServie implements InMemoryDbService {

    createDb() {

      const todos:Todo[]=[
        {id:'111',content:'hello'},
        {id:'121',content:'Angular'},
        {id:'131',content:'Angular Ngrx'}
      ];




        
     const events: IEvent[]=[
        {
            "id":"101",
            "name":"BootCamp",
            "date":"2022-12-31",
            "time":"16-30-00",
            "price":399,
            "imageUrl": "#",
            "location": {
                "address":"Jai Jai Ram Muhalla",
                "city":"Kasganj",
                "country":"India"
                },
            "session" :[
                {
                    "id":"10101",
                    "name":"Batch 1",
                    "presenter":"Ms. Shalu Sharma",
                    "duration":"90",
                    "level":"Beginner",
                    "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
                },{
                    "id":"10102",
                    "name":"Batch 1",
                    "presenter":"Ms. Shalu Sharma",
                    "duration":"90",
                    "level":"Beginner",
                    "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
                }
            ]   
        },
        {
            "id":"101",
            "name":"BootCamp",
            "date":"2022-12-31",
            "time":"16-30-00",
            "price":399,
            "imageUrl": "#",
            "location": {
                "address":"Jai Jai Ram Muhalla",
                "city":"Kasganj",
                "country":"India"
                },
            "session" :[
                {
                    "id":"10101",
                    "name":"Batch 1",
                    "presenter":"Ms. Shalu Sharma",
                    "duration":"90",
                    "level":"Beginner",
                    "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
                }
            ]   
        },
        {
            "id":"101",
            "name":"BootCamp",
            "date":"2022-12-31",
            "time":"16-30-00",
            "price":399,
            "imageUrl": "#",
            "location": {
                "address":"Jai Jai Ram Muhalla",
                "city":"Kasganj",
                "country":"India"
                },
            "session" :[
                {
                    "id":"10101",
                    "name":"Batch 1",
                    "presenter":"Ms. Shalu Sharma",
                    "duration":"90",
                    "level":"Beginner",
                    "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
                }
            ]   
        }
       ]

       

let products=[
    {
      "id":1,
      "name":"Gas Stove",
      "price":"4000",
      "imageUrl":"../../assets/gasStove.webp",
      "rating":4,
      "category":"Category.Kitchen"
      }
       ,{
      "id":2,
      "name":"Samsung Guru",
      "price":"4000",
      "imageUrl":"../../assets/samsungGuru.avif",
      "rating":3,
      "category":"Category.Electric"
    }
     ,{
      "id":3,
      "name":"Nokia 1100",
      "price":"3200",
      "imageUrl":"../../assets/nokia1100.jpeg",
      "rating":2,
      "category":"Category.Electric"
    }
    ,{
      "id":4,
      "name":"Mop",
      "price":"1500",
      "imageUrl":"../../assets/mop.webp",
      "rating":5,
      "category":"Category.Electric"
    }
     ,{
      "id":5,
      "name":"Chimney",
      "price":"40000",
      "imageUrl":"../../assets/chimney.jpeg",
      "rating":3.5,
      "category":"Category.Kitchen"
    }
  ]


       
    


const trustees:ITrustee[]=[

  {
    id:1,
    name:'Vansh',
    gender:'Male',
    countryOfResidence:'India',
    passport:'abchjd12',
    issuanceDate:new Date('2023-01-04'),
    noOfDependents:2
  },
  {
    id:2,
    name:'Raghav',
    gender:'Male',
    countryOfResidence:'India',
    passport:'ABC1234',
    issuanceDate:new Date('2023-01-04'),
    noOfDependents:3
  }

]

return {trustees,todos,products,events};

    }


}