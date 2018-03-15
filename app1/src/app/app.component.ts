import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gameInProgress: boolean = true
  public endingType: string

  public finishGame(endingType: string): void {
    this.gameInProgress = false
    this.endingType = endingType
  }

  public restartGame(): void {
    this.gameInProgress = true
    this.endingType = undefined
  }
}
