import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
	nombre: string;
	favoritos: Favorito[];
}

interface Favorito {
	id: number;
	nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

	nuevoJuego: string = "";

	persona: Persona = {
		nombre: 'Gaston',
		favoritos: [
			{ id: 1, nombre: 'Pokemon' },
			{ id: 2, nombre: 'Call Of Duty' },
		]
	}

	agregarJuego() {
		const nuevoFavorito: Favorito = {
			id: this.persona.favoritos.length,
			nombre: this.nuevoJuego
		}

		this.persona.favoritos.push({...nuevoFavorito});
		this.nuevoJuego = '';
	}

  guardar() {
  	console.log('Formulario posteado');
  }

  eliminar(index: number) {
  	this.persona.favoritos.splice(index, 1);
  }

}
