import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddBirimComponent } from './dialog-add-birim.component';

describe('DialogAddBirimComponent', () => {
  let component: DialogAddBirimComponent;
  let fixture: ComponentFixture<DialogAddBirimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddBirimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddBirimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
