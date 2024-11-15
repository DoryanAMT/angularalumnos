import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAlumnsComponent } from './active-alumns.component';

describe('ActiveAlumnsComponent', () => {
  let component: ActiveAlumnsComponent;
  let fixture: ComponentFixture<ActiveAlumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveAlumnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveAlumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
