import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionMaterialAngularComponent } from './expansion-material-angular.component';

describe('ExpansionMaterialAngularComponent', () => {
  let component: ExpansionMaterialAngularComponent;
  let fixture: ComponentFixture<ExpansionMaterialAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionMaterialAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionMaterialAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
