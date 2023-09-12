import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokCardComponent } from './stok-card.component';

describe('StokCardComponent', () => {
  let component: StokCardComponent;
  let fixture: ComponentFixture<StokCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StokCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StokCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
