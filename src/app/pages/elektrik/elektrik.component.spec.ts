import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElektrikComponent } from './elektrik.component';

describe('ElektrikComponent', () => {
  let component: ElektrikComponent;
  let fixture: ComponentFixture<ElektrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElektrikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElektrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
