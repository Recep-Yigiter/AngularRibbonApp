import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddTezgahComponent } from './dialog-add-tezgah.component';

describe('DialogAddTezgahComponent', () => {
  let component: DialogAddTezgahComponent;
  let fixture: ComponentFixture<DialogAddTezgahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddTezgahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddTezgahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
