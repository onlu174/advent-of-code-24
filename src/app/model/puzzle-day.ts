import { PuzzleSolverService } from './puzzle-solver.service';

export interface PuzzleDay {
  number: number;
  title: string;
  puzzleSolver: new () => PuzzleSolverService;
}
