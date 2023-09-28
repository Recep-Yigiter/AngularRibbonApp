import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddHizmetComponent } from './dialog-add-hizmet.component';

describe('DialogAddHizmetComponent', () => {
  let component: DialogAddHizmetComponent;
  let fixture: ComponentFixture<DialogAddHizmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddHizmetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddHizmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
