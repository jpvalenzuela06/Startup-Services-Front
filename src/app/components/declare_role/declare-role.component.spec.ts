import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareRoleComponent } from './declare-role.component';

describe('DeclareRoleComponent', () => {
  let component: DeclareRoleComponent;
  let fixture: ComponentFixture<DeclareRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclareRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
