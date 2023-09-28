import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddMasrafComponent } from './dialog-add-masraf.component';

describe('DialogAddMasrafComponent', () => {
  let component: DialogAddMasrafComponent;
  let fixture: ComponentFixture<DialogAddMasrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddMasrafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddMasrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
