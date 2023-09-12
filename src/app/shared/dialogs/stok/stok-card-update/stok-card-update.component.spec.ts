import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokCardUpdateComponent } from './stok-card-update.component';

describe('StokCardUpdateComponent', () => {
  let component: StokCardUpdateComponent;
  let fixture: ComponentFixture<StokCardUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StokCardUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StokCardUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
