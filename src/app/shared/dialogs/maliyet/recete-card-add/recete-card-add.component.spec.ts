import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceteCardAddComponent } from './recete-card-add.component';

describe('ReceteCardAddComponent', () => {
  let component: ReceteCardAddComponent;
  let fixture: ComponentFixture<ReceteCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceteCardAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceteCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
