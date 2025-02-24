import { Injectable } from '@angular/core';
import { PuzzleSolverService } from '../../model/puzzle-solver.service';

type Multiplication = [number, number];

const START_PATTERN = 'mul(' as const;
const DIVIDER_PATTERN = ',' as const;
const END_PATTERN = ')' as const;
const NUMBER_OF_DIGITS = 3 as const;

enum PatternRecognitionStage {
  START,
  FIRST_INPUT,
  DIVIDER,
  SECOND_INPUT,
  END,
}

@Injectable({
  providedIn: 'root',
})
export class Day3PuzzleSolverService implements PuzzleSolverService {
  solvePartOne(puzzleInput: string): number {
    const multiplications: Multiplication[] = this.findMultiplicationInstructions(puzzleInput);

    return multiplications.reduce(
      (accumulator, multiplication) => accumulator + multiplication[0] * multiplication[1],
      0,
    );
  }

  solvePartTwo(puzzleInput: string): number {
    throw new Error('Method not implemented.');
  }

  private findMultiplicationInstructions(puzzleInput: string): Multiplication[] {
    const multiplications: Multiplication[] = [];

    let recognitionStage = PatternRecognitionStage.START;
    let correctCharacters = 0;
    let firstInput: number;

    for (const char of puzzleInput) {
      if (recognitionStage === PatternRecognitionStage.START) {
        if (char === START_PATTERN[correctCharacters]) {
          correctCharacters++;

          if (correctCharacters >= START_PATTERN.length) {
            recognitionStage = PatternRecognitionStage.FIRST_INPUT;
            correctCharacters = 0;
          }
        } else {
          correctCharacters = 0;
        }
      } else if (recognitionStage === PatternRecognitionStage.FIRST_INPUT) {
        const digit = Number.parseInt(char);

        if (Number.isNaN(digit)) {
          if (char === DIVIDER_PATTERN[0]) {
            recognitionStage = PatternRecognitionStage.DIVIDER;
            correctCharacters = 1;

            if (DIVIDER_PATTERN.length >= correctCharacters) {
              recognitionStage = PatternRecognitionStage.SECOND_INPUT;
              correctCharacters = 0;
            }
          } else {
            recognitionStage = PatternRecognitionStage.START;
            correctCharacters = 0;
          }
        } else {
          firstInput += digit * Math.pow(10, correctCharacters);
          correctCharacters++;

          if (correctCharacters >= NUMBER_OF_DIGITS) {
            recognitionStage = PatternRecognitionStage.DIVIDER;
            correctCharacters = 0;
          }
        }
      } else {
      }
    }

    return multiplications;
  }
}
