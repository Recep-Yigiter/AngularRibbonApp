import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateMasrafComponent } from './dialog-update-masraf.component';

describe('DialogUpdateMasrafComponent', () => {
  let component: DialogUpdateMasrafComponent;
  let fixture: ComponentFixture<DialogUpdateMasrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateMasrafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateMasrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
