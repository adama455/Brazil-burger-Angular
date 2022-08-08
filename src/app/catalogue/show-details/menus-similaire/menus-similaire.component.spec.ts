import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitSimilaireComponent } from './menus-similaire.component';

describe('ProduitSimilaireComponent', () => {
  let component: ProduitSimilaireComponent;
  let fixture: ComponentFixture<ProduitSimilaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitSimilaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitSimilaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
