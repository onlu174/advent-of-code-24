import { Component, input, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PuzzleSolverService } from '../../model/puzzle-solver.service';

export enum PuzzlePart {
  One,
  Two,
}

@Component({
  selector: 'app-puzzle-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './puzzle-form.component.html',
})
export class PuzzleFormComponent {
  private readonly puzzleInputControl = new FormControl<File | null>(null, [Validators.required]);

  puzzleSolver = input.required<PuzzleSolverService>();
  puzzlePart = input.required<PuzzlePart>();

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
      let puzzleSolution: number;

      if (this.puzzlePart() === PuzzlePart.One) {
        puzzleSolution = this.puzzleSolver().solvePartOne(puzzleInput);
      } else if (this.puzzlePart() === PuzzlePart.Two) {
        puzzleSolution = this.puzzleSolver().solvePartTwo(puzzleInput);
      } else {
        throw new Error('PuzzlePart solving not implemented');
      }

      this.puzzleSolution.set(puzzleSolution);
    };
    fileReader.readAsText(puzzleInputFile);
  }
}
