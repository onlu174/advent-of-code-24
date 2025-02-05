import { Injectable } from '@angular/core';
import { PuzzleDay } from '../../model/puzzle-day';
import { Day1PuzzleSolverService } from '../day-1-puzzle-solver/day-1-puzzle-solver.service';

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
  ];
  readonly maxSize: number = 24;
}
