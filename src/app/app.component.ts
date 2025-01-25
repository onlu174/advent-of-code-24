import { Component } from '@angular/core';
import { PuzzleComponent } from './components/puzzle/puzzle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [PuzzleComponent],
})
export class AppComponent {}
