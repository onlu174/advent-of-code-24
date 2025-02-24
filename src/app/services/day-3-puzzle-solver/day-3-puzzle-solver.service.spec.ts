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

  describe('solvePartOne', () => {
    it('should return correct result', () => {
      const input = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))\n';

      expect(service.solvePartOne(input)).toBe(161);
    });
  });

  describe('solvePartTwo', () => {
    xit('should return correct result', () => {
      const input = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))\n';

      expect(service.solvePartTwo(input)).toBe(expect.anything());
    });
  });
});
