import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceteCardUpdateComponent } from './recete-card-update.component';

describe('ReceteCardUpdateComponent', () => {
  let component: ReceteCardUpdateComponent;
  let fixture: ComponentFixture<ReceteCardUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceteCardUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceteCardUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
