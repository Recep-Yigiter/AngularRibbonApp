import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalDialogContentComponent } from './normal-dialog-content.component';

describe('NormalDialogContentComponent', () => {
  let component: NormalDialogContentComponent;
  let fixture: ComponentFixture<NormalDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalDialogContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
