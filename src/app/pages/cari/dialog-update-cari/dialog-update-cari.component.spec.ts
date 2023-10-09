import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateCariComponent } from './dialog-update-cari.component';

describe('DialogUpdateCariComponent', () => {
  let component: DialogUpdateCariComponent;
  let fixture: ComponentFixture<DialogUpdateCariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateCariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateCariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
