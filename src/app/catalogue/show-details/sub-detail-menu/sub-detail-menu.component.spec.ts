import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDetailMenuComponent } from './sub-detail-menu.component';

describe('SubDetailMenuComponent', () => {
  let component: SubDetailMenuComponent;
  let fixture: ComponentFixture<SubDetailMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubDetailMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubDetailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
