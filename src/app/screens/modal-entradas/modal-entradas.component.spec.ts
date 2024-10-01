import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEntradasComponent } from './modal-entradas.component';

describe('ModalEntradasComponent', () => {
  let component: ModalEntradasComponent;
  let fixture: ComponentFixture<ModalEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEntradasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
