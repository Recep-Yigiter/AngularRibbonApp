import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectHizmetComponent } from './dialog-select-hizmet.component';

describe('DialogSelectHizmetComponent', () => {
  let component: DialogSelectHizmetComponent;
  let fixture: ComponentFixture<DialogSelectHizmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSelectHizmetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSelectHizmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
