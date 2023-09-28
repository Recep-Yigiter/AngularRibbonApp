import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateDepoComponent } from './dialog-update-depo.component';

describe('DialogUpdateDepoComponent', () => {
  let component: DialogUpdateDepoComponent;
  let fixture: ComponentFixture<DialogUpdateDepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateDepoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateDepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
