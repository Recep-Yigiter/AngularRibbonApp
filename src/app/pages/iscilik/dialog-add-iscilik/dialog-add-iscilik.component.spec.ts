import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddIscilikComponent } from './dialog-add-iscilik.component';

describe('DialogAddIscilikComponent', () => {
  let component: DialogAddIscilikComponent;
  let fixture: ComponentFixture<DialogAddIscilikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddIscilikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddIscilikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
