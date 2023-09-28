import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBirimComponent } from './list-birim.component';

describe('ListBirimComponent', () => {
  let component: ListBirimComponent;
  let fixture: ComponentFixture<ListBirimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBirimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBirimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
