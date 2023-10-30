import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UretimTabComponent } from './uretim-tab.component';

describe('UretimTabComponent', () => {
  let component: UretimTabComponent;
  let fixture: ComponentFixture<UretimTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UretimTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UretimTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
