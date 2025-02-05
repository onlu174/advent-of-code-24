import { Component, inject, signal } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { PuzzleSolverService } from '../../model/puzzle-solver.service';
import { RouterLink } from '@angular/router';
import { PUZZLE_DAY_DATA } from '../../model/puzzle-day-data';

@Component({
  selector: 'app-puzzle',
  imports: [FormsModule, RouterLink],
  templateUrl: './puzzle.component.html',
})
export class PuzzleComponent {
  readonly puzzleDayData = inject(PUZZLE_DAY_DATA);
  private readonly puzzleSolverService = inject(PuzzleSolverService);

  private readonly puzzleInputControl = new FormControl<File | null>(null, [Validators.required]);

  puzzleSolution = signal<number | null>(null);

  onFileInputChange(event: Event): void {
    const input = event.target as HTMLInputElement | null;

    if (input === null) {
      throw new Error('Input Element is null');
    }

    const inputFiles = input.files;

    if (inputFiles === null) {
      throw new Error('Input Element FileList is null');
    }

    this.puzzleInputControl.setValue(inputFiles.item(0));
  }

  onFormSubmit(): void {
    const puzzleInputFile = this.puzzleInputControl.value;

    if (puzzleInputFile === null) return;

    this.solvePuzzle(puzzleInputFile);
  }

  private solvePuzzle(puzzleInputFile: File): void {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const puzzleInput = fileReader.result as string;
      const puzzleSolution = this.puzzleSolverService.solvePartOne(puzzleInput);

      this.puzzleSolution.set(puzzleSolution);
    };
    fileReader.readAsText(puzzleInputFile);
  }
}
