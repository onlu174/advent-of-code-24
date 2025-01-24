import { solveDay1Puzzle } from './day-1-puzzle-solution';

describe('Day1PuzzleSolution', () => {
  describe('solveDay1Puzzle', () => {
    it('should return correct result', () => {
      const input = '3   4\n' + '4   3\n' + '2   5\n' + '1   3\n' + '3   9\n' + '3   3';

      expect(solveDay1Puzzle(input)).toBe(11);
    });

    it('should throw error if input is empty', () => {
      expect(() => solveDay1Puzzle('')).toThrowError();
    });

    it('should throw error if any line has number missing', () => {
      const input = '3   4\n' + '4    \n' + '2   5\n' + '1   3\n' + '3   9\n' + '3   3';

      expect(() => solveDay1Puzzle(input)).toThrowError();
    });

    it('should throw error if any line has character being NaN', () => {
      const input = '3   4\n' + '4   x\n' + '2   5\n' + '1   3\n' + '3   9\n' + '3   3';

      expect(() => solveDay1Puzzle(input)).toThrowError();
    });
  });
});
