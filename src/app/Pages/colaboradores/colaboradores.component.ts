import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule], // No necesitas importar tu propio componente aquí.
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css'] 
})
export default class ColaboradoresComponent {
  showModal: boolean = false;

  AgregarColab() {
    this.showModal = true;
  }

  CerrarColab() {
    this.showModal = false;
  }


}
