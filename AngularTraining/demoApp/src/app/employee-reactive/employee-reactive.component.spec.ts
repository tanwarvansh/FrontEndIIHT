import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeReactiveComponent } from './employee-reactive.component';

describe('EmployeeReactiveComponent', () => {
  let component: EmployeeReactiveComponent;
  let fixture: ComponentFixture<EmployeeReactiveComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeReactiveComponent ],
      imports:[FormsModule,ReactiveFormsModule]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
