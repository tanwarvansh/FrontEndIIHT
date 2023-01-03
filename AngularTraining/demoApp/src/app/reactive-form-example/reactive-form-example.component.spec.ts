import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormExampleComponent } from './reactive-form-example.component';

describe('ReactiveFormExampleComponent', () => {
  let component: ReactiveFormExampleComponent;
  let fixture: ComponentFixture<ReactiveFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormExampleComponent ],
      imports:[FormsModule,ReactiveFormsModule,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
