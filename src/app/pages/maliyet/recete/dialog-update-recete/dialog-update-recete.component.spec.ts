import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateReceteComponent } from './dialog-update-recete.component';

describe('DialogUpdateReceteComponent', () => {
  let component: DialogUpdateReceteComponent;
  let fixture: ComponentFixture<DialogUpdateReceteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateReceteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateReceteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
