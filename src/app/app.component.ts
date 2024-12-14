import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend_3B';

  constructor(private router: Router) {}

  redirectLogin(){
    this.router.navigate(["/auth/login"])
  }
  redirectRegister(){
    this.router.navigate(["/auth/register"])
  }
}
