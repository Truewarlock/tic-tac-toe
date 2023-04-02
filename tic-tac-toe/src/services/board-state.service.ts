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
}

