import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleFormComponent } from './puzzle-form.component';

describe('PuzzleFormComponent', () => {
  let component: PuzzleFormComponent;
  let fixture: ComponentFixture<PuzzleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PuzzleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
