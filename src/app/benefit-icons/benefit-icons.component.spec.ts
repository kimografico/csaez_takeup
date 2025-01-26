import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitIconsComponent } from './benefit-icons.component';

describe('BenefitIconsComponent', () => {
  let component: BenefitIconsComponent;
  let fixture: ComponentFixture<BenefitIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitIconsComponent]
    });
    fixture = TestBed.createComponent(BenefitIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
