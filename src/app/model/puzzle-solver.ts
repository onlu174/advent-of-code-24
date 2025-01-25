import { Injectable } from '@angular/core';

@Injectable()
export abstract class PuzzleSolverService {
  abstract solve(puzzleInput: string): number;
}
