import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UretimComponent } from './uretim.component';

describe('UretimComponent', () => {
  let component: UretimComponent;
  let fixture: ComponentFixture<UretimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UretimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UretimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
