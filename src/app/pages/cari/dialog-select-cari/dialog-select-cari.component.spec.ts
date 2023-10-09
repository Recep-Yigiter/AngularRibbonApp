import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectCariComponent } from './dialog-select-cari.component';

describe('DialogSelectCariComponent', () => {
  let component: DialogSelectCariComponent;
  let fixture: ComponentFixture<DialogSelectCariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSelectCariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSelectCariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
