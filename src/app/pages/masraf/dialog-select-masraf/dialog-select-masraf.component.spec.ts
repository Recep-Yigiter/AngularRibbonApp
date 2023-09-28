import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectMasrafComponent } from './dialog-select-masraf.component';

describe('DialogSelectMasrafComponent', () => {
  let component: DialogSelectMasrafComponent;
  let fixture: ComponentFixture<DialogSelectMasrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSelectMasrafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSelectMasrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
