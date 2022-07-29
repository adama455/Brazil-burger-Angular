import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeLigneComponent } from './commande-ligne.component';

describe('CommandeLigneComponent', () => {
  let component: CommandeLigneComponent;
  let fixture: ComponentFixture<CommandeLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeLigneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
