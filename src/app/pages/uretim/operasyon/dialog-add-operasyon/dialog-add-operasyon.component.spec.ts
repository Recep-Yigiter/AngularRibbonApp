import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddOperasyonComponent } from './dialog-add-operasyon.component';

describe('DialogAddOperasyonComponent', () => {
  let component: DialogAddOperasyonComponent;
  let fixture: ComponentFixture<DialogAddOperasyonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddOperasyonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddOperasyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
