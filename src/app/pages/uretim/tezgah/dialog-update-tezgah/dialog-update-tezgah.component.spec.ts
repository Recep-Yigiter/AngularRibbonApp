import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateTezgahComponent } from './dialog-update-tezgah.component';

describe('DialogUpdateTezgahComponent', () => {
  let component: DialogUpdateTezgahComponent;
  let fixture: ComponentFixture<DialogUpdateTezgahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateTezgahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateTezgahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
