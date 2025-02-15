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

  describe('solvePartOne', () => {
    it('should return correct result', () => {
      const input = '7 6 4 2 1\n' + '1 2 7 8 9\n' + '9 7 6 2 1\n' + '1 3 2 4 5\n' + '8 6 4 4 1\n' + '1 3 6 7 9';

      expect(service.solvePartOne(input)).toBe(2);
    });
  });

  describe('solvePartTwo', () => {
    it('should return correct result', () => {
      const input = '7 6 4 2 1\n' + '1 2 7 8 9\n' + '9 7 6 2 1\n' + '1 3 2 4 5\n' + '8 6 4 4 1\n' + '1 3 6 7 9';

      expect(service.solvePartTwo(input)).toBe(4);
    });
  });
});
