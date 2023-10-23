import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeDialogContentComponent } from './large-dialog-content.component';

describe('LargeDialogContentComponent', () => {
  let component: LargeDialogContentComponent;
  let fixture: ComponentFixture<LargeDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeDialogContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
