import { InjectionToken } from '@angular/core';

export interface PuzzleDayData {
  number: number;
  title: string;
}

export const PUZZLE_DAY_DATA = new InjectionToken<PuzzleDayData>('PuzzleDayData');
