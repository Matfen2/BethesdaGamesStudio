import { Component } from '@angular/core';

@Component({
  selector: 'app-show-univers',
  templateUrl: './show-univers.component.html',
  styleUrls: ['./show-univers.component.css'],
})
export class ShowUniversComponent {
  // TES
  firstSaga = [
    {
      id: 1,
      pict: '/assets/picts/theElderScrolls/TES1Arena.jpg',
    },
    {
      id: 2,
      pict: '/assets/picts/theElderScrolls/TES2Daggerfall.jpg',
    },
    {
      id: 3,
      pict: '/assets/picts/theElderScrolls/TES3Morrowind.png',
    },
    {
      id: 4,
      pict: '/assets/picts/theElderScrolls/TES4Oblivion.png',
    },
    {
      id: 5,
      pict: '/assets/picts/theElderScrolls/TES5Skyrim.jpg',
    },
    {
      id: 6,
      pict: '/assets/picts/theElderScrolls/TESOnline.jpg',
    },
  ];

  // FALLOUT
  secondSaga = [
    {
      id: 1,
      pict: '/assets/picts/fallout/fallout1.jpg',
    },
    {
      id: 2,
      pict: '/assets/picts/fallout/fallout2.jpg',
    },
    {
      id: 3,
      pict: '/assets/picts/fallout/fallout3.jpg',
    },
    {
      id: 4,
      pict: '/assets/picts/fallout/falloutNewVegas.jpg',
    },
    {
      id: 5,
      pict: '/assets/picts/fallout/fallout4.jpg',
    },
    {
      id: 6,
      pict: '/assets/picts/fallout/fallout76.jpg',
    },
  ];

  // STARFIELD
  thirdSaga = [
    {
      id: 1,
      pict: '/assets/picts/starfield/starfield.jpg',
    },
  ];

  gamesShow: number | null = null;

  showUnivers(numberGames: number) {
    if (this.gamesShow === numberGames) {
      this.gamesShow = null;
    } else {
      this.gamesShow = numberGames;
    }
  }
}
