import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateChildReceteComponent } from './dialog-update-child-recete.component';

describe('DialogUpdateChildReceteComponent', () => {
  let component: DialogUpdateChildReceteComponent;
  let fixture: ComponentFixture<DialogUpdateChildReceteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateChildReceteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateChildReceteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
