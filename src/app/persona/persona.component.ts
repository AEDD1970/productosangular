import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicio/persona.service';
import { Product } from '../models/producto';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  agregarPersonaProducto: Product = { id: '', producname: '', price: '', description: '' }
  personas: Required<Product[]> = []
  constructor(private personaService: PersonaService) {
    this.ObtenerPersona();
  }
  ObtenerPersona() {

    this.personaService.obtenerTodosProductos().subscribe(resultado => {
      //console.log(resultado);
      this.personas = resultado[0].data
    },
      error => {

        console.log(JSON.stringify(error));
      });
  }

  ngOnInit() {
    this.ObtenerPersona()
  }
  eliminarPersona(identificador) {
    this.personaService.eliminarProductos(identificador).subscribe(resultado => {
      this.ObtenerPersona();
    },

      error => {

        console.log(JSON.stringify(error));
      });

  }
  agregarPersona() {
    this.personaService.agregarProductos(this.agregarPersonaProducto).subscribe(resultado => {
      this.ObtenerPersona();
    },
      error => {
        console.log(JSON.stringify(error));
      });

  }

}
