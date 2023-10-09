import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddCariComponent } from './dialog-add-cari.component';

describe('DialogAddCariComponent', () => {
  let component: DialogAddCariComponent;
  let fixture: ComponentFixture<DialogAddCariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddCariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddCariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
