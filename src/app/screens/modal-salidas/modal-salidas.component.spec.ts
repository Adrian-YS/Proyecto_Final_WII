import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSalidasComponent } from './modal-salidas.component';

describe('ModalSalidasComponent', () => {
  let component: ModalSalidasComponent;
  let fixture: ComponentFixture<ModalSalidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSalidasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSalidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
