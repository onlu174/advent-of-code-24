import { Component, inject, signal } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { Day1PuzzleSolverService } from '../../services/day-1-puzzle-solver/day-1-puzzle-solver.service';

@Component({
  selector: 'app-puzzle',
  imports: [FormsModule],
  templateUrl: './puzzle.component.html',
})
export class PuzzleComponent {
  private readonly puzzleSolverService = inject(Day1PuzzleSolverService);

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
      const puzzleSolution = this.puzzleSolverService.solveDay1Puzzle(puzzleInput);

      this.puzzleSolution.set(puzzleSolution);
    };
    fileReader.readAsText(puzzleInputFile);
  }
}
