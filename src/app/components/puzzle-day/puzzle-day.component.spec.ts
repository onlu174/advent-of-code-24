import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleDayComponent } from './puzzle-day.component';
import { PUZZLE_DAY_DATA, PuzzleDayData } from '../../model/puzzle-day-data';
import { PuzzleSolverService } from '../../model/puzzle-solver.service';
import { provideRouter } from '@angular/router';

describe('PuzzleComponent', () => {
  let component: PuzzleDayComponent;
  let fixture: ComponentFixture<PuzzleDayComponent>;

  const puzzleDayDataMock: PuzzleDayData = {
    number: 2137,
    title: 'Polish Papacy',
  };
  const puzzleSolverServiceMock: Partial<PuzzleSolverService> = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleDayComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    TestBed.overrideProvider(PUZZLE_DAY_DATA, { useValue: puzzleDayDataMock });
    TestBed.overrideProvider(PuzzleSolverService, { useValue: puzzleSolverServiceMock });

    fixture = TestBed.createComponent(PuzzleDayComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
