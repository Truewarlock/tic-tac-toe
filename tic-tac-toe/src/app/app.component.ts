import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  grid:any=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]

  isPlayerXTurn:boolean=true;
  changeGrid(x:number,y:number){
    if(this.isPlayerXTurn){
      this.grid[x][y]=true
    }else{
      this.grid[x][y]=false
    }
    this.isPlayerXTurn=!this.isPlayerXTurn;
  }

}
