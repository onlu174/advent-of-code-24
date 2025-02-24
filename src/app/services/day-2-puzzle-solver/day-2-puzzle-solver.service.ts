import { Injectable } from '@angular/core';
import { PuzzleSolverService } from '../../model/puzzle-solver.service';

type UnusualData = Report[];
type Report = Level[];
type Level = number;

@Injectable({
  providedIn: 'root',
})
export class Day2PuzzleSolverService implements PuzzleSolverService {
  solvePartOne(puzzleInput: string): number {
    const unusualData = this.mapPuzzleInput(puzzleInput);

    return unusualData.reduce(
      (accumulator, currentReport) => (this.checkIfReportSafe(currentReport) ? accumulator + 1 : accumulator),
      0,
    );
  }

  solvePartTwo(puzzleInput: string): number {
    throw new Error('Method not implemented.');
  }

  private mapPuzzleInput(puzzleInput: string): UnusualData {
    const lines = puzzleInput.split('\n');

    if (lines.at(-1) === '') lines.pop(); //removes empty last line

    return lines.map((line) => line.split(' ').map((char) => Number(char)));
  }

  private checkIfReportSafe(report: Report): boolean {
    enum LevelsDirection {
      Increasing,
      Decreasing,
    }

    let direction: LevelsDirection | undefined = undefined;

    for (let i = 1; i < report.length; i++) {
      const currentLevel = report[i];
      const previousLevel = report[i - 1];

      const levelDifference = currentLevel - previousLevel;

      if (levelDifference === 0) return false;
      if (Math.abs(levelDifference) >= 4) return false;

      const currentLevelsDirection = levelDifference > 0 ? LevelsDirection.Increasing : LevelsDirection.Decreasing;

      if (direction === undefined) direction = currentLevelsDirection;
      if (currentLevelsDirection !== direction) return false;
    }

    return true;
  }
}
