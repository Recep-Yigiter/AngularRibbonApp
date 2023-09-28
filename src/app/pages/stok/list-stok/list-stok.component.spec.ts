import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStokComponent } from './list-stok.component';

describe('ListStokComponent', () => {
  let component: ListStokComponent;
  let fixture: ComponentFixture<ListStokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
