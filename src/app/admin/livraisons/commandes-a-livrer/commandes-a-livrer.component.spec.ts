import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesALivrerComponent } from './commandes-a-livrer.component';

describe('CommandesALivrerComponent', () => {
  let component: CommandesALivrerComponent;
  let fixture: ComponentFixture<CommandesALivrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesALivrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesALivrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
