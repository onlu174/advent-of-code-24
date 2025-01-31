import { PuzzleSolverService } from './puzzle-solver.service';

export interface Day {
  number: number;
  title: string;
  puzzleSolver: new () => PuzzleSolverService;
}
