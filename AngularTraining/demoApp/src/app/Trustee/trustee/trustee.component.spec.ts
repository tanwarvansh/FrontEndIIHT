import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusteeComponent } from './trustee.component';

describe('TrusteeComponent', () => {
  let component: TrusteeComponent;
  let fixture: ComponentFixture<TrusteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrusteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrusteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
