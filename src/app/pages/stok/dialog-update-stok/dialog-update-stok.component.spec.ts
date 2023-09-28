import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateStokComponent } from './dialog-update-stok.component';

describe('DialogUpdateStokComponent', () => {
  let component: DialogUpdateStokComponent;
  let fixture: ComponentFixture<DialogUpdateStokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateStokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateStokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
