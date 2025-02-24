import { Injectable } from '@angular/core';
import { PuzzleDay } from '../../model/puzzle-day';
import { Day1PuzzleSolverService } from '../day-1-puzzle-solver/day-1-puzzle-solver.service';
import { Day2PuzzleSolverService } from '../day-2-puzzle-solver/day-2-puzzle-solver.service';
import { Day3PuzzleSolverService } from '../day-3-puzzle-solver/day-3-puzzle-solver.service';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  readonly calendar: PuzzleDay[] = [
    {
      number: 1,
      title: 'Historian Hysteria',
      puzzleSolver: Day1PuzzleSolverService,
    },
    {
      number: 2,
      title: 'Red-Nosed Reports',
      puzzleSolver: Day2PuzzleSolverService,
    },
    {
      number: 3,
      title: 'Mull It Over',
      puzzleSolver: Day3PuzzleSolverService,
    },
  ];
  readonly maxSize: number = 24;
}
