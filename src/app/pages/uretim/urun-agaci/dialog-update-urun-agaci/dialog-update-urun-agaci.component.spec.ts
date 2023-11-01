import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateUrunAgaciComponent } from './dialog-update-urun-agaci.component';

describe('DialogUpdateUrunAgaciComponent', () => {
  let component: DialogUpdateUrunAgaciComponent;
  let fixture: ComponentFixture<DialogUpdateUrunAgaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateUrunAgaciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateUrunAgaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
