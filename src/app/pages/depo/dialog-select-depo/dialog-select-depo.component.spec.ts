import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectDepoComponent } from './dialog-select-depo.component';

describe('DialogSelectDepoComponent', () => {
  let component: DialogSelectDepoComponent;
  let fixture: ComponentFixture<DialogSelectDepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSelectDepoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSelectDepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
