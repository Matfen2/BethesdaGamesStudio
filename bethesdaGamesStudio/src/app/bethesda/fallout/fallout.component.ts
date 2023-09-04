import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fallout',
  templateUrl: './fallout.component.html',
  styleUrls: ['./fallout.component.css'],
})
export class FalloutComponent implements OnInit {
  showTwoId!: number;
  showTwoDetails: any;

  showTwoData = [
    {
      id: 1,
      pict: '/assets/picts/fallout/fallout1.jpg',
      title: 'FALLOUT (1997)',
      typeOne: 'RPG',
      typeTwo: 'TOUR PAR TOUR',
      typeThree: 'CHOIX ET CONSEQUENCE',
      describe:
        "Vous incarnez un réfugié de l'Abri 13, l'un de ceux construits pour protéger quelques privilégiés. Le dirigeant de l'Abri 13 vous envoie chercher une puce de rechange pour la filtration de l'eau. Né dans l'abri, vous vous apprêtez à découvrir ce qu'il reste du monde extérieur.",
      trailer: '/assets/picts/fallout/Fallout 1 Trailer.mp4',
      buy: 'https://www.instant-gaming.com/fr/2323-acheter-steam-fallout-a-post-nuclear-role-playing-game-pc-jeu-steam/',
    },
    {
      id: 2,
      pict: '/assets/picts/fallout/fallout2.jpg',
      title: 'FALLOUT 2 (1998)',
      typeOne: 'RPG',
      typeTwo: 'TOUR PAR TOUR',
      typeThree: 'CHOIX ET CONSEQUENCE',
      describe:
        "Après la Grande Guerre du XXIe siècle qui fut dévastatrice pour l'humanité, des hommes tentent de survivre dans les ruines de grandes villes. Votre mission principale sera de retrouver le G.E.C.K, une sorte de jardin d'eden en kit. Ce nouvel opus prend place environ 80 ans après le premier épisode.",
      trailer: '/assets/picts/fallout/Fallout 2 Trailer.mp4',
      buy: 'https://www.instant-gaming.com/fr/1932-acheter-steam-fallout-2-a-post-nuclear-role-playing-game-pc-jeu-steam/',
    },
    {
      id: 3,
      pict: '/assets/picts/fallout/fallout3.jpg',
      title: 'FALLOUT 3 (2008)',
      typeOne: 'RPG',
      typeTwo: 'FPS',
      typeThree: 'CHOIX ET CONSEQUENCE',
      describe:
        "Vous viviez tranquillement dans l'abri 101, jusqu'au jour, où votre père a quitté votre abri pour des raisons mystérieuses. Vous le chercheriez à travers un vaste terre désolé envahi par des mutants, des goules, des raiders et d'autres choses.",
      trailer: '/assets/picts/fallout/Fallout 3 Trailer.mp4',
      buy: 'https://www.instant-gaming.com/fr/771-acheter-steam-fallout-3-goty-edition-goty-edition-pc-jeu-steam/',
    },
    {
      id: 4,
      pict: '/assets/picts/fallout/falloutNewVegas.jpg',
      title: 'FALLOUT NEW VEGAS (2010)',
      typeOne: 'RPG',
      typeTwo: 'FPS',
      typeThree: 'CHOIX ET CONSEQUENCE',
      describe:
        'Du désert de Mojave au strip de Vegas, en passant par le barrage Hoover Dam, vous allez rencontrer un bon nombre de personnages attachants et colorés. Faites les bonnes alliances et choisissez votre camps pour devenir le maître de Vegas.',
      trailer: '/assets/picts/fallout/Fallout New Vegas Trailer.mp4',
      buy: 'https://www.instant-gaming.com/fr/155-acheter-fallout-new-vegas-ultimate-ultimate-pc-jeu-steam-europe/',
    },
    {
      id: 5,
      pict: '/assets/picts/fallout/fallout4.jpg',
      title: 'FALLOUT 4 (2015)',
      typeOne: 'RPG',
      typeTwo: 'FPS',
      typeThree: 'CHOIX ET CONSEQUENCE',
      describe:
        "Dans la peau du seul survivant de l'abri 111, vous émergez dans un monde dévasté par une guerre nucléaire. Votre survie sera un combat de tous les instants et vos choix façonneront votre destin. Vous seul avez le pouvoir de faire entrer les Terres désolées dans une nouvelle ère.",
      trailer: '/assets/picts/fallout/Fallout 4 Trailer',
      buy: 'https://www.instant-gaming.com/fr/755-acheter-fallout-4-pc-jeu-steam/',
    },
    {
      id: 6,
      pict: '/assets/picts/fallout/fallout76.jpg',
      title: 'FALLOUT 76 (2018)',
      typeOne: 'RPG',
      typeTwo: 'MULTIJOUEUR',
      typeThree: 'PVP ET PVE',
      describe:
        "On y incarnera un habitant de l'abris 76 a peine 25 ans après l'holocauste nucléaire, qui a pour tâche de rebâtir le monde pour la population des autres abris.",
      trailer: '/assets/picts/fallout/Fallout 76 Trailer.mp4',
      buy: 'https://www.instant-gaming.com/fr/2644-acheter-fallout-76-pc-jeu-steam-europe/',
    },
  ];

  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.showTwoId = +params['id'];
      this.showTwoDetails = this.showTwoData.find(
        (game) => game.id === this.showTwoId
      );
    });
  }
}
