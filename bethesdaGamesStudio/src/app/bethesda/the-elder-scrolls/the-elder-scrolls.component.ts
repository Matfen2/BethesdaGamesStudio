import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-the-elder-scrolls',
  templateUrl: './the-elder-scrolls.component.html',
  styleUrls: ['./the-elder-scrolls.component.css'],
})
export class TheElderScrollsComponent implements OnInit {
  showOneId!: number;
  showOneDetails: any;

  constructor(private routes: ActivatedRoute) {}

  showOneData = [
    {
      id: 1,
      pict: '/assets/picts/theElderScrolls/TES1Arena.jpg',
      title: 'THE ELDER SCROLLS : ARENA',
      typeOne: 'FPS',
      typeTwo: 'BAC-A-SABLE',
      typeThree: 'CHOIX ET CONSEQUENCE',
      describe:
        "Le mage-guerrier impérial Jagar Tharn a trahi l'empereur Uriel Septim, il l'a emprisonné dans une autre dimension afin d'usurper sa place sur le trône. Un prisonnier solitaire va devoir voyager jusqu'aux sites les plus célèbres et les plus dangereux de Tamriel pour récupérer les fragments de Bâton du Chaos. Il pourra ainsi sauver l'empire et son souverain.",
      trailer:
        '/assets/picts/theElderScrolls/The Elder Scrolls Arena Trailer.mp4',
      buy: 'https://store.steampowered.com/app/1812290/The_Elder_Scrolls_Arena/?l=french',
    },
    {
      id: 2,
      pict: '/assets/picts/theElderScrolls/TES2Daggerfall.jpg',
      title: 'THE ELDER SCROLLS II : DAGGERFALL',
      typeOne: 'FPS',
      typeTwo: 'BAC-A-SABLE',
      typeThree: 'CHOIX ET CONSEQUENCE',
      describe:
        "Le mage-guerrier impérial Jagar Tharn a trahi l'empereur Uriel Septim, il l'a emprisonné dans une autre dimension afin d'usurper sa place sur le trône. Un prisonnier solitaire va devoir voyager jusqu'aux sites les plus célèbres et les plus dangereux de Tamriel pour récupérer les fragments de Bâton du Chaos. Il pourra ainsi sauver l'empire et son souverain.",
      trailer:
        '/assets/picts/theElderScrolls/The Elder Scrolls II Daggerfall Trailer.mp4',
      buy: 'https://store.steampowered.com/app/1812390/The_Elder_Scrolls_II_Daggerfall/?l=french',
    },
    {
      id: 3,
      pict: '/assets/picts/theElderScrolls/TES3Morrowind.png',
      title: 'THE ELDER SCROLLS III : MORROWIND',
      typeOne: 'FPS',
      typeTwo: 'BAC-A-SABLE',
      typeThree: 'CHOIX ET CONSEQUENCE',
      describe:
        "Les prophéties perdues parlent d'un Incarné, la réincarnation d'un héros dunmer du nom de Nérévar, qui doit venir à Morrowind pour briser la malédiction qui l'accable. Afin d'accomplir la prophétie, l'empereur envoie un messager impérial inconnu sur l'île de Vvardenfell. Suite à diverses quêtes périlleuses et confrontations magiques, ce messager inconnu va devenir le héros le plus robuste de tout l'empire.",
      trailer:
        '/assets/picts/theElderScrolls/The Elder Scrolls III  Morrowind Trailer.mp4',
      buy: 'https://www.instant-gaming.com/fr/852-acheter-steam-the-elder-scrolls-iii-morrowind-goty-goty-edition-pc-jeu-steam/',
    },
    {
      id: 4,
      pict: '/assets/picts/theElderScrolls/TES4Oblivion.png',
      title: 'THE ELDER SCROLLS IV : OBLIVION',
      typeOne: 'FPS',
      typeTwo: 'BAC-A-SABLE',
      typeThree: 'CHOIX ET CONSEQUENCE',
      describe:
        "Le mage-guerrier impérial Jagar Tharn a trahi l'empereur Uriel Septim, il l'a emprisonné dans une autre dimension afin d'usurper sa place sur le trône. Un prisonnier solitaire va devoir voyager jusqu'aux sites les plus célèbres et les plus dangereux de Tamriel pour récupérer les fragments de Bâton du Chaos. Il pourra ainsi sauver l'empire et son souverain.",
      trailer:
        '/assets/picts/theElderScrolls/The Elder Scrolls IV  Oblivion Trailer.mp4',
      buy: 'https://www.instant-gaming.com/fr/3485-acheter-steam-the-elder-scrolls-iv-oblivion-goty-deluxe-edition-goty-deluxe-edition-pc-jeu-steam/',
    },
    {
      id: 5,
      pict: '/assets/picts/theElderScrolls/TES5Skyrim.jpg',
      title: 'THE ELDER SCROLLS V : SKYRIM',
      typeOne: 'FPS',
      typeTwo: 'BAC-A-SABLE',
      typeThree: 'CHOIX ET CONSEQUENCE',
      describe:
        "L'Empire de Tamriel va bientôt sombrer. Le Haut-Roi de Bordeciel a été assassiné. Les alliances se forment selon les prétendants au trône. Les Dragons, depuis longtemps oubliés des Elder Scrolls, reviennent à Tamriel. Le futur de Bordeciel et de l'Empire tout entier repose sur une prophétie évoquant le retour d'un fils de dragon : un héros possédant le pouvoir de la Voix, le seul et unique à être capable d'affronter les dragons.",
      trailer:
        '/assets/picts/theElderScrolls/The Elder Scrolls V Skyrim - Official Trailer.mp4',
      buy: 'https://www.instant-gaming.com/fr/1512-acheter-steam-the-elder-scrolls-v-skyrim-special-edition-special-edition-pc-jeu-steam/',
    },
    {
      id: 6,
      pict: '/assets/picts/theElderScrolls/TESOnline.jpg',
      title: 'THE ELDER SCROLLS : ONLINE',
      typeOne: 'MULTIJOUEUR',
      typeTwo: 'BAC-A-SABLE',
      typeThree: 'CHOIX ET CONSEQUENCE',
      describe:
        'Découvrez les secrets de Tamriel tandis que vous partez en quête de votre âme perdue et sauvez le monde face à Oblivion. Vivez toutes les histoires dans toutes les régions du monde, dans l’ordre que vous voudrez… seul ou en groupe.',
      trailer:
        '/assets/picts/theElderScrolls/The Elder Scrolls Online - The Alliances Cinematic Trailer.mp4',
      buy: 'https://www.instant-gaming.com/fr/10360-acheter-the-elder-scrolls-online-collection-high-isle-collector-s-edition-collector-s-edition-pc-mac-jeu/',
    },
  ];

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.showOneId! = +params['id'];
      this.showOneDetails = this.showOneData.find(
        (game) => game.id === this.showOneId
      );
    });
  }
}
