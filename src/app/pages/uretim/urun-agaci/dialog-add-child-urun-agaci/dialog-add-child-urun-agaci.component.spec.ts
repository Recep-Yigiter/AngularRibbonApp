import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddChildUrunAgaciComponent } from './dialog-add-child-urun-agaci.component';

describe('DialogAddChildUrunAgaciComponent', () => {
  let component: DialogAddChildUrunAgaciComponent;
  let fixture: ComponentFixture<DialogAddChildUrunAgaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddChildUrunAgaciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddChildUrunAgaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
