import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokCardAddComponent } from './stok-card-add.component';

describe('StokCardAddComponent', () => {
  let component: StokCardAddComponent;
  let fixture: ComponentFixture<StokCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StokCardAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StokCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
