import { PuzzleSolverService } from '../model/puzzle-solver.service';
import { Day1PuzzleSolverService } from '../services/day-1-puzzle-solver/day-1-puzzle-solver.service';
import { Router } from '@angular/router';

const puzzleSolverFactory = (router: Router) => {
  console.log(router.routerState.snapshot.root.children[0].params['day']);

  return Day1PuzzleSolverService;
};

export const puzzleSolverProvider = {
  provide: PuzzleSolverService,
  useFactory: puzzleSolverFactory,
  deps: [Router],
};
