import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'random-numbers';
  constructor(private router: Router) {}
  random() {
    this.router.navigate(['/random']);
  }
  randomRxjs() {
    this.router.navigate(['/rxjs-random']);
  }
}
