import { Injectable } from '@angular/core';
import { Candy } from './candy';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandyDataService {

  // array of candy
  candies: Candy[] = [];

  // method to get candy
  // was: getCandy(): Candy[] {
  getCandy(): Observable<Candy[]> {
    // was: return this.candies;
    return of(this.candies);
  }

  // method to add candy
  addCandy(candy: Candy) {
    this.candies.push(candy);
  }

  delete(candy: Candy) {
    this.candies.forEach((c, index) => {
      if (candy === c) {
        this.candies.splice(index, 1);
      }
    });
  }

  constructor() { }
}
