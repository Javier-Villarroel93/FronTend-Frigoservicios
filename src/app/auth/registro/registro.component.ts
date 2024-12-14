import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importación necesaria para [(ngModel)]
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombreCompleto: string = ''; // Propiedad para el nombre completo
  correoElectronico: string = ''; // Propiedad para el correo electrónico
  numeroContacto: string = ''; // Propiedad para el número de contacto
  password: string = ''; // Propiedad para la contraseña

  constructor(private router: Router) {}

  crearUsuario() {
    console.log('Usuario creado:', {
      nombreCompleto: this.nombreCompleto,
      correoElectronico: this.correoElectronico,
      numeroContacto: this.numeroContacto,
      password: this.password
    });

    // Lógica adicional o redirección
    this.router.navigate(['/']);
  }
}
