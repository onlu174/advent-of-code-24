import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { solveDay1Puzzle } from './puzzle-solutions/day-1-puzzle-solution/day-1-puzzle-solution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ReactiveFormsModule, FormsModule],
})
export class AppComponent {
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
      const puzzleSolution = solveDay1Puzzle(puzzleInput);

      this.puzzleSolution.set(puzzleSolution);
    };
    fileReader.readAsText(puzzleInputFile);
  }
}
