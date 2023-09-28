import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateIscilikComponent } from './dialog-update-iscilik.component';

describe('DialogUpdateIscilikComponent', () => {
  let component: DialogUpdateIscilikComponent;
  let fixture: ComponentFixture<DialogUpdateIscilikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateIscilikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateIscilikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
