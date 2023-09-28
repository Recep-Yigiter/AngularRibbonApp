import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddChildStokComponent } from './dialog-add-child-stok.component';

describe('DialogAddChildStokComponent', () => {
  let component: DialogAddChildStokComponent;
  let fixture: ComponentFixture<DialogAddChildStokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddChildStokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddChildStokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
