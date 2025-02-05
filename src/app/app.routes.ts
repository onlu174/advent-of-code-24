import { Routes } from '@angular/router';
import { PuzzleDayComponent } from './components/puzzle/puzzle-day.component';
import { puzzleSolverProvider } from './utils/puzzle-solver-provider';
import { CalendarComponent } from './components/calendar/calendar.component';
import { Path } from './utils/path';
import { puzzleDayDataProvider } from './utils/puzzle-day-data-provider';

export const routes: Routes = [
  {
    path: Path.calendar,
    component: CalendarComponent,
  },
  {
    path: Path.puzzle,
    component: PuzzleDayComponent,
    providers: [puzzleDayDataProvider, puzzleSolverProvider],
  },
  {
    path: '**',
    redirectTo: Path.calendar,
  },
];
