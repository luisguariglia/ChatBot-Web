import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosAsignaturasComponent } from './horarios-asignaturas.component';

describe('HorariosAsignaturasComponent', () => {
  let component: HorariosAsignaturasComponent;
  let fixture: ComponentFixture<HorariosAsignaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariosAsignaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorariosAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
