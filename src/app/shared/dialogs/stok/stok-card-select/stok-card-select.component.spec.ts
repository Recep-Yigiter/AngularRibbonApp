import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokCardSelectComponent } from './stok-card-select.component';

describe('StokCardSelectComponent', () => {
  let component: StokCardSelectComponent;
  let fixture: ComponentFixture<StokCardSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StokCardSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StokCardSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
