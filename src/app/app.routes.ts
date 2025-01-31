import { Routes } from '@angular/router';
import { PuzzleComponent } from './components/puzzle/puzzle.component';
import { puzzleSolverProvider } from './utils/puzzle-solver-provider';
import { CalendarComponent } from './components/calendar/calendar.component';

export const routes: Routes = [
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'calendar/:day',
    component: PuzzleComponent,
    providers: [puzzleSolverProvider],
  },
  {
    path: '**',
    redirectTo: 'calendar',
  },
];
