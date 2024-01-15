import { Component } from '@angular/core';
import { CountService } from '../../shared/count.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html'
})
export class LazyComponent {
  constructor(
    public countService: CountService
  ) {}
}
