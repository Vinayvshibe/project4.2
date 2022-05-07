import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameproductComponent } from './nameproduct.component';

describe('NameproductComponent', () => {
  let component: NameproductComponent;
  let fixture: ComponentFixture<NameproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
