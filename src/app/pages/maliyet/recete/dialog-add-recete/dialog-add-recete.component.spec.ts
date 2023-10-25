import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddReceteComponent } from './dialog-add-recete.component';

describe('DialogAddReceteComponent', () => {
  let component: DialogAddReceteComponent;
  let fixture: ComponentFixture<DialogAddReceteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddReceteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddReceteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
