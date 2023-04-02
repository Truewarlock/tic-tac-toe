import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardStateService {

  constructor() { }

  grid:any=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]

  isPlayerXTurn:boolean=true;

  resetBoardState(){
    const line= new Array<boolean|null>(3).fill(null)
    this.grid= new Array<any>(3).fill(line);
    console.log(this.grid)
  }
}
