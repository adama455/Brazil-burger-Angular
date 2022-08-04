import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixTailleBoissonComponent } from './choix-taille-boisson.component';

describe('ChoixTailleBoissonComponent', () => {
  let component: ChoixTailleBoissonComponent;
  let fixture: ComponentFixture<ChoixTailleBoissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixTailleBoissonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixTailleBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
