import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAbilitiesComponent } from './register-abilities.component';

describe('RegisterAbilitiesComponent', () => {
  let component: RegisterAbilitiesComponent;
  let fixture: ComponentFixture<RegisterAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAbilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
