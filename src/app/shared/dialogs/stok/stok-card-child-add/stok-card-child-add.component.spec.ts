import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokCardChildAddComponent } from './stok-card-child-add.component';

describe('StokCardChildAddComponent', () => {
  let component: StokCardChildAddComponent;
  let fixture: ComponentFixture<StokCardChildAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StokCardChildAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StokCardChildAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
