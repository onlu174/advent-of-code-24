import { Routes } from '@angular/router';
import { PuzzleComponent } from './components/puzzle/puzzle.component';
import { puzzleSolverProvider } from './utils/puzzle-solver-provider';

export const routes: Routes = [
  {
    path: ':day',
    component: PuzzleComponent,
    providers: [puzzleSolverProvider],
  },
];
