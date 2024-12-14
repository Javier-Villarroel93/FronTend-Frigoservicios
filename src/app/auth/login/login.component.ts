import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule, CommonModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  correoElectronico: string ="";
  password: string = "";

  
  constructor(private router: Router) {}
  
  crearUsuario() {
    console.log('Usuario creado:', {
      correoElectronico: this.correoElectronico,
      password: this.password
    });
  }

  iniciarSesion(){
    this.router.navigate(['/page']);
  }
  redirectRegister(){
    this.router.navigate(['/auth/register']);
  }

}
