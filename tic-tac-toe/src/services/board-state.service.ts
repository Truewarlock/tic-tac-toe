import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardStateService {

  constructor() { }

  grid: any = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]

  isPlayerXTurn: boolean = true;

  resetBoardState() {
    this.isPlayerXTurn=true
    this.grid =[[null, null, null],
               [null, null, null],
               [null, null, null]]
    console.log(this.grid)
  }
}
