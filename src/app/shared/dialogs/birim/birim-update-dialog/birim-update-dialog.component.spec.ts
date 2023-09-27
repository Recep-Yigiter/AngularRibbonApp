import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirimUpdateDialogComponent } from './birim-update-dialog.component';

describe('BirimUpdateDialogComponent', () => {
  let component: BirimUpdateDialogComponent;
  let fixture: ComponentFixture<BirimUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirimUpdateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirimUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
