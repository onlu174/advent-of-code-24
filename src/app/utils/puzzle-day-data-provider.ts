import { Router } from '@angular/router';
import { CalendarService } from '../services/calendar/calendar.service';
import { RouteParam } from './route-param';
import { PUZZLE_DAY_DATA, PuzzleDayData } from '../model/puzzle-day-data';

const puzzleDayFactory = (router: Router, calendarService: CalendarService): PuzzleDayData => {
  const dayParam = router.routerState.snapshot.root.children[0].params[RouteParam.puzzleDay];
  const dayNumber = Number.parseInt(dayParam);
  const dayIndex = dayNumber - 1;

  return calendarService.calendar[dayIndex];
};

export const puzzleDayDataProvider = {
  provide: PUZZLE_DAY_DATA,
  useFactory: puzzleDayFactory,
  deps: [Router, CalendarService],
};
