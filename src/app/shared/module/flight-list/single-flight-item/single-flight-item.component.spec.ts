import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFlightItemComponent } from './single-flight-item.component';

describe('SingleFlightItemComponent', () => {
  let component: SingleFlightItemComponent;
  let fixture: ComponentFixture<SingleFlightItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFlightItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFlightItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
