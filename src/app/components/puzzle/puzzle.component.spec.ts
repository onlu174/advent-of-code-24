import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleComponent } from './puzzle.component';
import { PUZZLE_DAY_DATA, PuzzleDayData } from '../../model/puzzle-day-data';
import { PuzzleSolverService } from '../../model/puzzle-solver.service';
import { provideRouter } from '@angular/router';

describe('PuzzleComponent', () => {
  let component: PuzzleComponent;
  let fixture: ComponentFixture<PuzzleComponent>;

  const puzzleDayDataMock: PuzzleDayData = {
    number: 2137,
    title: 'Polish Papacy',
  };
  const puzzleSolverServiceMock: Partial<PuzzleSolverService> = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleComponent],
      providers: [
        provideRouter([]),
        { provide: PUZZLE_DAY_DATA, useValue: puzzleDayDataMock },
        { provide: PuzzleSolverService, useValue: puzzleSolverServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PuzzleComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
