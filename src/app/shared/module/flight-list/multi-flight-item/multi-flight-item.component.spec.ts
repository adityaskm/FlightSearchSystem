import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFlightItemComponent } from './multi-flight-item.component';

describe('MultiFlightItemComponent', () => {
  let component: MultiFlightItemComponent;
  let fixture: ComponentFixture<MultiFlightItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiFlightItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFlightItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
