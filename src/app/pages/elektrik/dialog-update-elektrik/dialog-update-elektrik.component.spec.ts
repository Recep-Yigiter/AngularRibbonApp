import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateElektrikComponent } from './dialog-update-elektrik.component';

describe('DialogUpdateElektrikComponent', () => {
  let component: DialogUpdateElektrikComponent;
  let fixture: ComponentFixture<DialogUpdateElektrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateElektrikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateElektrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
