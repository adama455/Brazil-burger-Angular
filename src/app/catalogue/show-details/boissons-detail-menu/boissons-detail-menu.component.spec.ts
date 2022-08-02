import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonsDetailMenuComponent } from './boissons-detail-menu.component';

describe('BoissonsDetailMenuComponent', () => {
  let component: BoissonsDetailMenuComponent;
  let fixture: ComponentFixture<BoissonsDetailMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoissonsDetailMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoissonsDetailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
