import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirimAddDialogComponent } from './birim-add-dialog.component';

describe('BirimAddDialogComponent', () => {
  let component: BirimAddDialogComponent;
  let fixture: ComponentFixture<BirimAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirimAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirimAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
