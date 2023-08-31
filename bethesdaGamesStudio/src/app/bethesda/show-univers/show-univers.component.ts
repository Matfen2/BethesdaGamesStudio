import { Component } from '@angular/core';

@Component({
  selector: 'app-show-univers',
  templateUrl: './show-univers.component.html',
  styleUrls: ['./show-univers.component.css']
})
export class ShowUniversComponent {
  gamesShow : number | null = null;

  showUnivers (numberGames: number) {
    if (this.gamesShow === numberGames) {
      this.gamesShow = null;
    } else {
      this.gamesShow = numberGames;
    }
  }
}
