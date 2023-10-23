import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDialogContentComponent } from './small-dialog-content.component';

describe('SmallDialogContentComponent', () => {
  let component: SmallDialogContentComponent;
  let fixture: ComponentFixture<SmallDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallDialogContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
