import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBootComponent } from './event-boot.component';

describe('EventBootComponent', () => {
  let component: EventBootComponent;
  let fixture: ComponentFixture<EventBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBootComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  



});
