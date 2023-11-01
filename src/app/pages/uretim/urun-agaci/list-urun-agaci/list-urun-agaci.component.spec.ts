import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUrunAgaciComponent } from './list-urun-agaci.component';

describe('ListUrunAgaciComponent', () => {
  let component: ListUrunAgaciComponent;
  let fixture: ComponentFixture<ListUrunAgaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUrunAgaciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUrunAgaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
