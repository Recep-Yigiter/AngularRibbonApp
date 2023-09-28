import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateHizmetComponent } from './dialog-update-hizmet.component';

describe('DialogUpdateHizmetComponent', () => {
  let component: DialogUpdateHizmetComponent;
  let fixture: ComponentFixture<DialogUpdateHizmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateHizmetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateHizmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
