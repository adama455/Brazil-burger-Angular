import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FritesMenuComponent } from './frites-menu.component';

describe('FritesMenuComponent', () => {
  let component: FritesMenuComponent;
  let fixture: ComponentFixture<FritesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FritesMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FritesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
