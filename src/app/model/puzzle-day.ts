import { PuzzleSolverService } from './puzzle-solver.service';
import { PuzzleDayData } from './puzzle-day-data';

export interface PuzzleDay extends PuzzleDayData {
  puzzleSolver: new () => PuzzleSolverService;
}
