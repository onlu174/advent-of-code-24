import { Routes } from '@angular/router';
import { PuzzleComponent } from './components/puzzle/puzzle.component';
import { puzzleSolverProvider } from './utils/puzzle-solver-provider';
import { CalendarComponent } from './components/calendar/calendar.component';
import { Path } from './utils/path';

export const routes: Routes = [
  {
    path: Path.calendar,
    component: CalendarComponent,
  },
  {
    path: Path.puzzle,
    component: PuzzleComponent,
    providers: [puzzleSolverProvider],
  },
  {
    path: '**',
    redirectTo: Path.calendar,
  },
];
