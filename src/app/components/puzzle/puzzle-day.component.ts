import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PuzzleSolverService } from '../../model/puzzle-solver.service';
import { RouterLink } from '@angular/router';
import { PUZZLE_DAY_DATA } from '../../model/puzzle-day-data';
import { PuzzleFormComponent } from '../puzzle-form/puzzle-form.component';

@Component({
  selector: 'app-puzzle-day',
  imports: [FormsModule, RouterLink, PuzzleFormComponent],
  templateUrl: './puzzle-day.component.html',
})
export class PuzzleDayComponent {
  readonly puzzleDayData = inject(PUZZLE_DAY_DATA);
  readonly puzzleSolverService = inject(PuzzleSolverService);
}
