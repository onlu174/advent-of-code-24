import { TestBed } from '@angular/core/testing';

import { Day2PuzzleSolverService } from './day-2-puzzle-solver.service';

describe('Day2PuzzleSolverService', () => {
  let service: Day2PuzzleSolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Day2PuzzleSolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
