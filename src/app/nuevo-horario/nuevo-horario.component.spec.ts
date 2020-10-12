import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoHorarioComponent } from './nuevo-horario.component';

describe('NuevoHorarioComponent', () => {
  let component: NuevoHorarioComponent;
  let fixture: ComponentFixture<NuevoHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
