import { Day1PuzzleSolverService } from './day-1-puzzle-solver.service';
import { TestBed } from '@angular/core/testing';

describe('Day1PuzzleSolver', () => {
  let service: Day1PuzzleSolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(Day1PuzzleSolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('solveDay1Puzzle', () => {
    it('should return correct result', () => {
      const input = '3   4\n' + '4   3\n' + '2   5\n' + '1   3\n' + '3   9\n' + '3   3';

      expect(service.solve(input)).toBe(11);
    });

    it('should throw error if input is empty', () => {
      expect(() => service.solve('')).toThrowError();
    });

    it('should throw error if any line has number missing', () => {
      const input = '3   4\n' + '4    \n' + '2   5\n' + '1   3\n' + '3   9\n' + '3   3';

      expect(() => service.solve(input)).toThrowError();
    });

    it('should throw error if any line has character being NaN', () => {
      const input = '3   4\n' + '4   x\n' + '2   5\n' + '1   3\n' + '3   9\n' + '3   3';

      expect(() => service.solve(input)).toThrowError();
    });
  });
});
