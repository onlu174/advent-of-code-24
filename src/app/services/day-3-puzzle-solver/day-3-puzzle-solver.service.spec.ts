import { TestBed } from '@angular/core/testing';

import { Day3PuzzleSolverService } from './day-3-puzzle-solver.service';

describe('Day3PuzzleSolverService', () => {
  let service: Day3PuzzleSolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Day3PuzzleSolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
