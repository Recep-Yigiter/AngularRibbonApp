import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddStokComponent } from './dialog-add-stok.component';

describe('DialogAddStokComponent', () => {
  let component: DialogAddStokComponent;
  let fixture: ComponentFixture<DialogAddStokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddStokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddStokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
