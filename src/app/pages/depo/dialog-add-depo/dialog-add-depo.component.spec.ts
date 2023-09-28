import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDepoComponent } from './dialog-add-depo.component';

describe('DialogAddDepoComponent', () => {
  let component: DialogAddDepoComponent;
  let fixture: ComponentFixture<DialogAddDepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddDepoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddDepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
