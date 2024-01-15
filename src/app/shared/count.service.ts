import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  public clickCount: number = 0;

  constructor() {}

  public increaseCount() {
    console.log('count increased', this.clickCount);
    this.clickCount++;
  }
}
