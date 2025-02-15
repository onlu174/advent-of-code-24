import { Routes } from '@angular/router';
import { PuzzleDayComponent } from './components/puzzle/puzzle-day.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { Path } from './utils/path';

export const routes: Routes = [
  {
    path: Path.calendar,
    component: CalendarComponent,
  },
  {
    path: Path.puzzle,
    component: PuzzleDayComponent,
  },
  {
    path: '**',
    redirectTo: Path.calendar,
  },
];
