import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMasrafComponent } from './list-masraf.component';

describe('ListMasrafComponent', () => {
  let component: ListMasrafComponent;
  let fixture: ComponentFixture<ListMasrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMasrafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMasrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
