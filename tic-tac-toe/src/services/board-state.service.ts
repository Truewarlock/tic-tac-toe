import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardStateService {

  constructor() {
    this.initGrid();
  }

  grid: any = []

  isPlayerXTurn: boolean = true;

  resetBoardState() {
    this.isPlayerXTurn = true
    this.initGrid()
  }

  private initGrid() {
    const numRows = 3; // Change this to the number of rows you want
    const numCols = 3; // Change this to the number of columns you want
    this.grid = Array(numRows).fill(null).map(() => Array(numCols).fill(null));
  }

  wonBy: [string, number] = ["", 0]
  checkWin(x: number, y: number) {

    // check rows
    for (let i = 0; i < 3; i++) {
      if (this.grid[i][0] == this.grid[i][1] && this.grid[i][1] == this.grid[i][2] && this.grid[i][1] !== null) {
        this.wonBy = ["row", i]
        this.gameWon(this.grid[i][i]);
        return;
      }
    }

    //check columns
    for (let i = 0; i < 3; i++) {
      if (this.grid[0][i] == this.grid[1][i] && this.grid[1][i] == this.grid[2][i] && this.grid[1][i] !== null) {
        this.wonBy = ["col", i]
        this.gameWon(this.grid[i][i]);
        return;
      }
    }

    // check diagonals
    if ((this.grid[0][0] == this.grid[1][1] && this.grid[1][1] == this.grid[2][2] && this.grid[1][1] !== null) ||
      (this.grid[0][2] == this.grid[1][1] && this.grid[1][1] == this.grid[2][0] && this.grid[1][1] !== null)) {
      if (this.grid[0][0] !== null) {
        this.wonBy = ["diag", 0]
      } else {
        this.wonBy = ["antidiag", 0]
      }

      this.gameWon(this.grid[1][1]);
    }

  }

  gameOver: boolean = false
  gameWon(winner: boolean) {
    this.gameOver = true;
    console.log(this.wonBy[0], this.wonBy[1])
    if (winner) {
      console.log("X WON");
    } else {
      console.log("O WON");
    }
  }

}
