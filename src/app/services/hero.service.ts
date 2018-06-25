import {Injectable} from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
