import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicio/persona.service';
import { Product, ProductApi } from '../models/producto';
import { TypeProduct } from '../models/typeproduct';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  //add Product
  agregarPersonaProducto: Product = {id: '', producname: '', type_product_id: '', price: '', description: '', quantiyy: '', image: '' }
  personas: ProductApi[] = []
  fileEvent: any;
  filterPost = '';
  //add TypeProduct

  agregarTypeProduct: TypeProduct = { nametype: '', name: '' }
  types: TypeProduct[] = [
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
      console.log(this.personas);
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
  async agregarPersona() {

    var dataResult = await this.readFile();

    if(!dataResult['isError']){
      this.agregarPersonaProducto.image = dataResult['result'];

      this.personaService.agregarProductos(this.agregarPersonaProducto).subscribe((product) => {
        this.personas = [...this.personas, product]
      },
        error => {
          console.log(JSON.stringify(error));
        });
    }else{
      console.log(dataResult['result']);
    }


    
  }

  chargeEventFile(eventObj) {
    this.fileEvent = eventObj;
  }


  async readFile() {

    return new Promise<any>((resolve, rejeact) => {
      let file = this.fileEvent.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {

        resolve({ isError: false, result: reader.result });
      };
      reader.onerror = function (error) {
        resolve({ isError: true, result: error });
      };
    });
  }

}
/**
 * @description estudio
 * @
 * primero las propiedades, luego el cosntructor, luego lo inicia al cargar mi htnml y por ultimo mi metodos o funciones
 */

