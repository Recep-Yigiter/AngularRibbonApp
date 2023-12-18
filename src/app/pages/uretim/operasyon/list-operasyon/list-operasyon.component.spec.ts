import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOperasyonComponent } from './list-operasyon.component';

describe('ListOperasyonComponent', () => {
  let component: ListOperasyonComponent;
  let fixture: ComponentFixture<ListOperasyonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOperasyonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOperasyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
