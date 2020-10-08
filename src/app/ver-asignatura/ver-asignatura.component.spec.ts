import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAsignaturaComponent } from './ver-asignatura.component';

describe('VerAsignaturaComponent', () => {
  let component: VerAsignaturaComponent;
  let fixture: ComponentFixture<VerAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
