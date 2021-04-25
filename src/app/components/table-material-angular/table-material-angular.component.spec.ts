import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMaterialAngularComponent } from './table-material-angular.component';

describe('TableMaterialAngularComponent', () => {
  let component: TableMaterialAngularComponent;
  let fixture: ComponentFixture<TableMaterialAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMaterialAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMaterialAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
