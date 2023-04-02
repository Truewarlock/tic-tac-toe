import { BoardStateService } from './../services/board-state.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  constructor(public boardState: BoardStateService) {}

  changeGrid(x: number, y: number) {
    if (this.boardState.isPlayerXTurn) {
      this.boardState.grid[x][y] = true
    } else {
      this.boardState.grid[x][y] = false
    }
    this.boardState.isPlayerXTurn = !this.boardState.isPlayerXTurn;
    console.log(this.boardState.grid,x,y)
  }



}
