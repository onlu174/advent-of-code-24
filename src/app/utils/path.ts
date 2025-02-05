import { RouteParam } from './route-param';

export enum Path {
  calendar = 'calendar',
  puzzle = `${Path.calendar}/:${RouteParam.puzzleDay}`,
}
