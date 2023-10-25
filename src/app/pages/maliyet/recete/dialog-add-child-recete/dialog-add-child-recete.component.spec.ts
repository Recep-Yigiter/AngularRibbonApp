import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddChildReceteComponent } from './dialog-add-child-recete.component';

describe('DialogAddChildReceteComponent', () => {
  let component: DialogAddChildReceteComponent;
  let fixture: ComponentFixture<DialogAddChildReceteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddChildReceteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddChildReceteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
