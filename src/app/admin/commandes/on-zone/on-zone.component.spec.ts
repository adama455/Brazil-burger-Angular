import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnZoneComponent } from './on-zone.component';

describe('OnZoneComponent', () => {
  let component: OnZoneComponent;
  let fixture: ComponentFixture<OnZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
