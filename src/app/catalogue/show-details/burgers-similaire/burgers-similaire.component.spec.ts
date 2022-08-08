import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgersSimilaireComponent } from './burgers-similaire.component';

describe('BurgersSimilaireComponent', () => {
  let component: BurgersSimilaireComponent;
  let fixture: ComponentFixture<BurgersSimilaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgersSimilaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgersSimilaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
