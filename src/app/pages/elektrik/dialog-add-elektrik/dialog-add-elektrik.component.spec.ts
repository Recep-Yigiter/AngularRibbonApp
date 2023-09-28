import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddElektrikComponent } from './dialog-add-elektrik.component';

describe('DialogAddElektrikComponent', () => {
  let component: DialogAddElektrikComponent;
  let fixture: ComponentFixture<DialogAddElektrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddElektrikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddElektrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
