import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '../hero';
import { HEROS } from '../mock-heros';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private messageService: MessageService)
  // This is a typical "service-in-service" scenario: 
  // You inject the MessageService into the HeroService 
  // which is injected into the HeroesComponent.
  { }

  getHeros(): Observable<Hero[]> {
    const heroes = of(HEROS);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added later.
    const hero = HEROS.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    return of(hero);

  }


}
