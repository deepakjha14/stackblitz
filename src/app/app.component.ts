import { Component } from '@angular/core';
import { CountService } from './shared/count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stackblitz';
  constructor(
    public countService: CountService
  ){}
}
