import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirimSelectDialogComponent } from './birim-select-dialog.component';

describe('BirimSelectDialogComponent', () => {
  let component: BirimSelectDialogComponent;
  let fixture: ComponentFixture<BirimSelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirimSelectDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirimSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
