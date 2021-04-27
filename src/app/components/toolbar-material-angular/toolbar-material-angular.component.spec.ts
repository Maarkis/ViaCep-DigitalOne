import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarMaterialAngularComponent } from './toolbar-material-angular.component';

describe('ToolbarMaterialAngularComponent', () => {
  let component: ToolbarMaterialAngularComponent;
  let fixture: ComponentFixture<ToolbarMaterialAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarMaterialAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarMaterialAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
