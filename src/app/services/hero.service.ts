import {Injectable} from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() {
  }
}
