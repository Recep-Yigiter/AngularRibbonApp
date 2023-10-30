import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokTabComponent } from './stok-tab.component';

describe('StokTabComponent', () => {
  let component: StokTabComponent;
  let fixture: ComponentFixture<StokTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StokTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StokTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
