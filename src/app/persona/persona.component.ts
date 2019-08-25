import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicio/persona.service';
import { Product } from '../models/producto';
import { TypeProduct } from '../models/typeproduct';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  //add Product
  agregarPersonaProducto: Product = { producname: '', type_product_id: '', price: '', description: '', quantiyy: '' }
  personas: Required<Product[]> = []

  filterPost = '';
  //add TypeProduct

  agregarTypeProduct: TypeProduct = { nametype: '', name: '' }
  types: Required<TypeProduct[]> = [
    { nametype: 1, name: 'Collar' },
    { nametype: 2, name: 'Pulsera' },
    { nametype: 3, name: 'Anillo' }
  ];


  constructor(private personaService: PersonaService) {
    this.obtenerPersona();
    this.obetenerTypes();

  }

  ngOnInit() {
    this.obtenerPersona()
    this.obetenerTypes()
  }

  obtenerPersona() {
    this.personaService.obtenerTodosProductos().subscribe(resultado => {

      this.personas = resultado.data
    },
      error => {

        console.log(JSON.stringify(error));
      });
  }

  obetenerTypes() {
    this.personaService.obtenerTodosType().subscribe(resultado => {

      this.types = resultado[0].types
    },
      error => {

        console.log(JSON.stringify(error));
      });

  }

  eliminarPersona(identificador) {
    this.personaService.eliminarProductos(identificador).subscribe(resultado => {
      this.personas = this.personas.filter(({ id }) => id != identificador)
    },

      error => {

        console.log(JSON.stringify(error));
      });

  }
  agregarPersona() {
    this.personaService.agregarProductos(this.agregarPersonaProducto).subscribe((product) => {
      this.personas = [...this.personas, product]
    },
      error => {
        console.log(JSON.stringify(error));
      });

  }

}
/**
 * @description estudio
 * @
 * primero las propiedades, luego el cosntructor, luego lo inicia al cargar mi htnml y por ultimo mi metodos o funciones
 */

