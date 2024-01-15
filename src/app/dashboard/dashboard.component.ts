import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountService } from '../shared/count.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(
    public countService: CountService
  ) {}
  increaseCount(): void {
    this.countService.increaseCount();
  }
}
