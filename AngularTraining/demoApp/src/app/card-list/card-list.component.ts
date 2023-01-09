import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  ngOnInit(): void {
    const subject=new Subject();
    subject.subscribe(d=> console.log(d));
    subject.subscribe(d=> console.log(d));
    subject.next(Math.random());
  }
  
  

}


