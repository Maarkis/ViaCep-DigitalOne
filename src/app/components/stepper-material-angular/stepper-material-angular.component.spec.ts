import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperMaterialAngularComponent } from './stepper-material-angular.component';

describe('StepperMaterialAngularComponent', () => {
  let component: StepperMaterialAngularComponent;
  let fixture: ComponentFixture<StepperMaterialAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperMaterialAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperMaterialAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
