import { Injectable } from '@angular/core';
import { Day } from '../../model/day';
import { Day1PuzzleSolverService } from '../day-1-puzzle-solver/day-1-puzzle-solver.service';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  readonly calendar: Day[] = [
    {
      number: 1,
      title: 'Historian Hysteria',
      puzzleSolver: Day1PuzzleSolverService,
    },
  ];
}
