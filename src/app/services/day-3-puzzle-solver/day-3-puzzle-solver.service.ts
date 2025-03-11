import { Injectable } from '@angular/core';
import { PuzzleSolverService } from '../../model/puzzle-solver.service';

type MultiplicationInput = [number, number];

const START_PATTERN = 'mul(' as const;
const INPUT_DIVIDER_PATTERN = ',' as const;
const END_PATTERN = ')' as const;
const NUMBER_OF_INPUT_DIGITS = 3 as const;

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
    const multiplications: MultiplicationInput[] = this.findMultiplications(puzzleInput);

    return multiplications.reduce(
      (accumulator, multiplicationInput) => accumulator + multiplicationInput[0] * multiplicationInput[1],
      0,
    );
  }

  solvePartTwo(puzzleInput: string): number {
    throw new Error('Method not implemented.');
  }

  private findMultiplications(puzzleInput: string): MultiplicationInput[] {
    const multiplications: MultiplicationInput[] = [];

    let recognitionStage = PatternRecognitionStage.START;
    let firstInput: number | undefined = undefined;
    let secondInput: number | undefined = undefined;

    for (let i = 0; i < puzzleInput.length; i++) {
      if (recognitionStage === PatternRecognitionStage.START) {
        if (this.checkForInstruction(puzzleInput, i)) {
          // next stage
          i += START_PATTERN.length - 1;
          recognitionStage = PatternRecognitionStage.FIRST_INPUT;
        }
      } else if (recognitionStage === PatternRecognitionStage.FIRST_INPUT) {
        firstInput = this.getInstructionInput(puzzleInput, i);

        if (firstInput === undefined) {
          // reset
          recognitionStage = PatternRecognitionStage.START;
        } else {
          // next stage
          i += firstInput.toString().length - 1;
          recognitionStage = PatternRecognitionStage.DIVIDER;
        }
      } else if (recognitionStage === PatternRecognitionStage.DIVIDER) {
        if (puzzleInput[i] === INPUT_DIVIDER_PATTERN) {
          // next stage
          recognitionStage = PatternRecognitionStage.SECOND_INPUT;
        } else {
          // reset
          recognitionStage = PatternRecognitionStage.START;
          firstInput = undefined;
        }
      } else if (recognitionStage === PatternRecognitionStage.SECOND_INPUT) {
        secondInput = this.getInstructionInput(puzzleInput, i);

        if (secondInput === undefined) {
          // reset
          recognitionStage = PatternRecognitionStage.START;
          firstInput = undefined;
        } else {
          // next stage
          i += secondInput.toString().length - 1;
          recognitionStage = PatternRecognitionStage.END;
        }
      } else if (recognitionStage === PatternRecognitionStage.END) {
        if (puzzleInput[i] === END_PATTERN) {
          multiplications.push([firstInput!, secondInput!]);
        }
        // reset
        recognitionStage = PatternRecognitionStage.START;
        firstInput = undefined;
        secondInput = undefined;
      }
    }

    return multiplications;
  }

  private checkForInstruction(puzzleInput: string, start: number): boolean {
    const possibleInstruction = puzzleInput.substring(start, start + START_PATTERN.length);

    return possibleInstruction === START_PATTERN;
  }

  private getInstructionInput(puzzleInput: string, start: number): number | undefined {
    let numbers = [...Array(NUMBER_OF_INPUT_DIGITS).keys()];

    numbers = numbers.map((_value, i) => Number.parseInt(puzzleInput[start + i]));

    const firstNanIndex = numbers.findIndex((number) => Number.isNaN(number));

    if (firstNanIndex !== -1) {
      numbers = numbers.slice(0, firstNanIndex);
    }

    return numbers.reduce((accumulator, currentNumber) => accumulator * 10 + currentNumber);
  }
}
