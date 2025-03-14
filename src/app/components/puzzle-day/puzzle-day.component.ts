import { Component, inject } from '@angular/core';
import { PuzzleSolverService } from '../../model/puzzle-solver.service';
import { RouterLink } from '@angular/router';
import { PUZZLE_DAY_DATA } from '../../model/puzzle-day-data';
import { PuzzleFormComponent, PuzzlePart } from '../puzzle-form/puzzle-form.component';
import { puzzleSolverProvider } from '../../utils/puzzle-solver-provider';
import { puzzleDayDataProvider } from '../../utils/puzzle-day-data-provider';

@Component({
  selector: 'app-puzzle-day',
  imports: [RouterLink, PuzzleFormComponent],
  providers: [puzzleSolverProvider, puzzleDayDataProvider],
  templateUrl: './puzzle-day.component.html',
})
export class PuzzleDayComponent {
  readonly puzzleDayData = inject(PUZZLE_DAY_DATA);
  readonly puzzleSolverService = inject(PuzzleSolverService);
  protected readonly PuzzlePart = PuzzlePart;
}
