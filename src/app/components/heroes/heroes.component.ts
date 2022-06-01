import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/services/hero.service';
// import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }

  getHeros(): void {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes)
  }


}
