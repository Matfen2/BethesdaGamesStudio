import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starfield',
  templateUrl: './starfield.component.html',
  styleUrls: ['./starfield.component.css'],
})
export class StarfieldComponent implements OnInit {
  showThreeId!: number;
  showThreeDetails: any;

  showThreeData = [
    {
      id: 1,
      pict: '/assets/picts/starfield/starfield.jpg',
      title: 'STARFIELD (2023)',
      typeOne: 'RPG',
      typeTwo: 'FPS',
      typeThree: 'CHOIX ET CONSEQUENCE',
      describe:
        "En 2330, l'humanité s'est aventurée au-delà de notre système solaire pour s'établir sur de nouvelles planètes et partir à la découverte de l'espace. Vous rejoindrez Constellation, le dernier groupe d'explorateurs de l'espace à la recherche d'artéfacts rares à travers la galaxie, et partirez explorer l'immensité de l'espace",
        trailer: '/assets/picts/starfield/Starfield Trailer.mp4'
    },
  ];

  constructor (private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.showThreeId =+ params['id'];
      this.showThreeDetails = this.showThreeData.find((game) => game.id === this.showThreeId);
    })
  }
}
