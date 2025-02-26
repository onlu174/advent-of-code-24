import { PuzzleSolverService } from '../model/puzzle-solver.service';
import { Router } from '@angular/router';
import { CalendarService } from '../services/calendar/calendar.service';
import { RouteParam } from './route-param';

const puzzleSolverFactory = (router: Router, calendarService: CalendarService): PuzzleSolverService => {
  const dayParam = router.routerState.snapshot.root.children[0].params[RouteParam.puzzleDay];
  const dayNumber = Number.parseInt(dayParam);
  const dayIndex = dayNumber - 1;
  const day = calendarService.calendar[dayIndex];

  return new day.puzzleSolver();
};

export const puzzleSolverProvider = {
  provide: PuzzleSolverService,
  useFactory: puzzleSolverFactory,
  deps: [Router, CalendarService],
};
