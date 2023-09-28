import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectBirimComponent } from './dialog-select-birim.component';

describe('DialogSelectBirimComponent', () => {
  let component: DialogSelectBirimComponent;
  let fixture: ComponentFixture<DialogSelectBirimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSelectBirimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSelectBirimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
