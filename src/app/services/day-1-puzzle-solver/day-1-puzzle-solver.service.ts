import { Injectable } from '@angular/core';
import { PuzzleSolverService } from '../../model/puzzle-solver.service';

interface Day1PuzzleInput {
  leftList: number[];
  rightList: number[];
}

@Injectable({
  providedIn: 'root',
})
export class Day1PuzzleSolverService implements PuzzleSolverService {
  solvePartOne(puzzleInput: string): number {
    const { leftList, rightList }: Day1PuzzleInput = this.mapDay1PuzzleInput(puzzleInput);

    leftList.sort();
    rightList.sort();

    if (leftList.length !== rightList.length) {
      throw new Error('Error at Day1Puzzle solution: lists are of different lengths.');
    }

    const pairDistances: number[] = [];

    for (let i = 0; i < leftList.length; i++) {
      const leftListNumber = leftList[i];
      const rightListNumber = rightList[i];
      const pairDistance = Math.abs(leftListNumber - rightListNumber);

      pairDistances.push(pairDistance);
    }

    return pairDistances.reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  solvePartTwo(puzzleInput: string): number {
    const { leftList, rightList }: Day1PuzzleInput = this.mapDay1PuzzleInput(puzzleInput);

    const rightListOccurrenceMap = new Map<number, number>();
    rightList.forEach((number) => {
      const occurrences = rightListOccurrenceMap.get(number) ?? 0;
      rightListOccurrenceMap.set(number, occurrences + 1);
    });

    return leftList.reduce(
      (accumulator, currentValue) => accumulator + currentValue * (rightListOccurrenceMap.get(currentValue) ?? 0),
      0,
    );
  }

  private mapDay1PuzzleInput(input: string): Day1PuzzleInput {
    if (input.length === 0) {
      throw new Error('Error at Day1Puzzle input: input is empty.');
    }

    const leftList: number[] = [];
    const rightList: number[] = [];

    input.split('\n').forEach((line: string, index: number) => {
      if (line === '') return;

      const [leftListNumberText, rightListNumberText] = line.split('   ');

      if (leftListNumberText === ' ' || rightListNumberText === ' ') {
        throw new Error(`Error at Day1Puzzle input at line ${index}: number for one of the lists is missing.`);
      }

      const leftListNumber = Number(leftListNumberText);
      const rightListNumber = Number(rightListNumberText);

      if (isNaN(leftListNumber) || isNaN(rightListNumber)) {
        throw new Error(`Error at Day1Puzzle input at line ${index}: number for one of the lists is NaN.`);
      }

      leftList.push(Number(leftListNumberText));
      rightList.push(Number(rightListNumberText));
    });

    return { leftList, rightList };
  }
}
