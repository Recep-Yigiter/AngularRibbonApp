import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUrunAgaciComponent } from './dialog-add-urun-agaci.component';

describe('DialogAddUrunAgaciComponent', () => {
  let component: DialogAddUrunAgaciComponent;
  let fixture: ComponentFixture<DialogAddUrunAgaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddUrunAgaciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddUrunAgaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
