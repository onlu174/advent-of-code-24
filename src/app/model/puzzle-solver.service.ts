import { Injectable } from '@angular/core';

@Injectable()
export abstract class PuzzleSolverService {
  abstract solvePartOne(puzzleInput: string): number;
  abstract solvePartTwo(puzzleInput: string): number;
}
