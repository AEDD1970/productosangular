import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductApi, Product } from '../models/producto';
import { PersonaService } from '../servicio/persona.service';

@Component({
  selector: 'app-pulsera',
  templateUrl: './pulsera.component.html',
  styleUrls: ['./pulsera.component.css']
})
export class PulseraComponent implements OnInit {
  agregarImagenProduct: Product = { id: '', producname: '', type_product_id: '', price: '', description: '', quantiyy: '', image: '' }
  pulsera: ProductApi[] = [];
  flagViewProduct: boolean = true;
  @Output() sendData: EventEmitter<any> = new EventEmitter();

  constructor(private personaService: PersonaService) {

  }
  ngOnInit() {
    this. obtenerPulseras()
  }

  sendProduct(param) {
    this.flagViewProduct = false;
    setTimeout(() => {
      this.sendData.emit(param)
    }, 100);
    
  }

  devolver(){
    this.flagViewProduct = true;
  }

  obtenerPulseras() {
    this.personaService.obtenerUnicoCollar(2).subscribe(resultado => {

      this.pulsera = resultado;
    },
      error => {

        console.log(JSON.stringify(error));
      });


  }

}
