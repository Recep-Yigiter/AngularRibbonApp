import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateChildStokComponent } from './dialog-update-child-stok.component';

describe('DialogUpdateChildStokComponent', () => {
  let component: DialogUpdateChildStokComponent;
  let fixture: ComponentFixture<DialogUpdateChildStokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateChildStokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateChildStokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
