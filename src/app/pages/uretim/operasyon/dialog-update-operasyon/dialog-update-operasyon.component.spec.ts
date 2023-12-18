import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateOperasyonComponent } from './dialog-update-operasyon.component';

describe('DialogUpdateOperasyonComponent', () => {
  let component: DialogUpdateOperasyonComponent;
  let fixture: ComponentFixture<DialogUpdateOperasyonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateOperasyonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateOperasyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
