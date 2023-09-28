import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectStokComponent } from './dialog-select-stok.component';

describe('DialogSelectStokComponent', () => {
  let component: DialogSelectStokComponent;
  let fixture: ComponentFixture<DialogSelectStokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSelectStokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSelectStokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
