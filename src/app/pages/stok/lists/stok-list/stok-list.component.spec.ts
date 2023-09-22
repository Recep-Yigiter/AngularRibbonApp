import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokListComponent } from './stok-list.component';

describe('StokListComponent', () => {
  let component: StokListComponent;
  let fixture: ComponentFixture<StokListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StokListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StokListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
