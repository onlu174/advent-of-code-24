import { Injectable } from '@angular/core';
import { PuzzleSolverService } from '../../model/puzzle-solver.service';

type InstructionInput = [number, number];

const START_PATTERN = 'mul(' as const;
const INPUT_DIVIDER_PATTERN = ',' as const;
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
    const instructions: InstructionInput[] = this.findInstructions(puzzleInput);

    return instructions.reduce(
      (accumulator, instructionInput) => accumulator + instructionInput[0] * instructionInput[1],
      0,
    );
  }

  solvePartTwo(puzzleInput: string): number {
    throw new Error('Method not implemented.');
  }

  private findInstructions(puzzleInput: string): InstructionInput[] {
    const multiplications: InstructionInput[] = [];

    let recognitionStage = PatternRecognitionStage.START;
    let firstInput: number | undefined = undefined;
    let secondInput: number | undefined = undefined;

    for (let i = 0; i < puzzleInput.length; i++) {
      if (recognitionStage === PatternRecognitionStage.START) {
        if (this.checkForInstruction(puzzleInput, i)) {
          i += START_PATTERN.length - 1;
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
        if (puzzleInput[i] === INPUT_DIVIDER_PATTERN) {
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
        if (puzzleInput[i] === END_PATTERN) {
          multiplications.push([firstInput!, secondInput!]);
        }

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
