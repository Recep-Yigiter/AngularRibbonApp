import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateBirimComponent } from './dialog-update-birim.component';

describe('DialogUpdateBirimComponent', () => {
  let component: DialogUpdateBirimComponent;
  let fixture: ComponentFixture<DialogUpdateBirimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateBirimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateBirimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
