import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripConfig } from './trip-config';

describe('TripConfig', () => {
  let component: TripConfig;
  let fixture: ComponentFixture<TripConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripConfig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
