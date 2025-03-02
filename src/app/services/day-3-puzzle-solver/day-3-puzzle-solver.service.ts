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
    let firstInput: number | undefined = undefined;
    let secondInput: number | undefined = undefined;

    for (let i = 0; i < puzzleInput.length; i++) {
      if (recognitionStage === PatternRecognitionStage.START) {
        if (this.checkForMultiplicationInstruction(puzzleInput, i)) {
          i += 3;
          recognitionStage = PatternRecognitionStage.FIRST_INPUT;
        }
      } else if (recognitionStage === PatternRecognitionStage.FIRST_INPUT) {
        firstInput = this.parseInput(puzzleInput, i);

        if (firstInput === undefined) {
          recognitionStage = PatternRecognitionStage.START;
        } else {
          i += firstInput.toString().length - 1;
          recognitionStage = PatternRecognitionStage.DIVIDER;
        }
      } else if (recognitionStage === PatternRecognitionStage.DIVIDER) {
        if (puzzleInput[i] === ',') {
          recognitionStage = PatternRecognitionStage.SECOND_INPUT;
        } else {
          recognitionStage = PatternRecognitionStage.START;
          firstInput = undefined;
        }
      } else if (recognitionStage === PatternRecognitionStage.SECOND_INPUT) {
        secondInput = this.parseInput(puzzleInput, i);

        if (secondInput === undefined) {
          recognitionStage = PatternRecognitionStage.START;
          firstInput = undefined;
        } else {
          i += secondInput.toString().length - 1;
          recognitionStage = PatternRecognitionStage.END;
        }
      } else if (recognitionStage === PatternRecognitionStage.END) {
        if (puzzleInput[i] === ')') {
          multiplications.push([firstInput!, secondInput!]);
        }

        recognitionStage = PatternRecognitionStage.START;
        firstInput = undefined;
        secondInput = undefined;
      }
    }
    return multiplications;
  }

  private checkForMultiplicationInstruction(puzzleInput: string, start: number): boolean {
    const possibleInstruction = puzzleInput.substring(start, start + 4);

    return possibleInstruction === 'mul(';
  }

  private parseInput(puzzleInput: string, start: number): number | undefined {
    const number1 = Number.parseInt(puzzleInput[start]);
    const number2 = Number.parseInt(puzzleInput[start + 1]);
    const number3 = Number.parseInt(puzzleInput[start + 2]);

    const isNum1NaN = Number.isNaN(number1);
    const isNum2NaN = Number.isNaN(number2);
    const isNum3NaN = Number.isNaN(number3);

    let parsedNumber = undefined;

    if (isNum1NaN) {
      return parsedNumber;
    }

    parsedNumber = number1;

    if (isNum2NaN) {
      return parsedNumber;
    }

    parsedNumber = parsedNumber * 10 + number2;

    if (isNum3NaN) {
      return parsedNumber;
    }

    parsedNumber = parsedNumber * 10 + number3;

    return parsedNumber;
  }
}
