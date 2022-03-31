import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsItemsComponent } from './actions-button.component';

describe('ActionsItemsComponent', () => {
  let component: ActionsItemsComponent;
  let fixture: ComponentFixture<ActionsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
