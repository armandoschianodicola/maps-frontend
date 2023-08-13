import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWeatherEventComponent } from './select-weather-event.component';

describe('SelectWeatherEventComponent', () => {
  let component: SelectWeatherEventComponent;
  let fixture: ComponentFixture<SelectWeatherEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectWeatherEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWeatherEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
