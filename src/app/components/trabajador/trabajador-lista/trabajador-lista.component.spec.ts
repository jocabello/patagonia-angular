import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorListaComponent } from './trabajador-lista.component';

describe('TrabajadorListaComponent', () => {
  let component: TrabajadorListaComponent;
  let fixture: ComponentFixture<TrabajadorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
