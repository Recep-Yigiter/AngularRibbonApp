import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddRotaComponent } from './dialog-add-rota.component';

describe('DialogAddRotaComponent', () => {
  let component: DialogAddRotaComponent;
  let fixture: ComponentFixture<DialogAddRotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddRotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
