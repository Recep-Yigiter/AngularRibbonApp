import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceteCardComponent } from './recete-card.component';

describe('ReceteCardComponent', () => {
  let component: ReceteCardComponent;
  let fixture: ComponentFixture<ReceteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
