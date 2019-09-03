import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../servicio/persona.service';
import { Product, ProductApi } from '../models/producto';


@Component({
  selector: 'app-collar',
  templateUrl: './collar.component.html',
  styleUrls: ['./collar.component.css']
})
export class CollarComponent implements OnInit {

  agregarImagenProduct: Product = { id: '', producname: '', type_product_id: '', price: '', description: '', quantiyy: '', image: '' }
  collar: ProductApi[] = [];
  flagViewProduct: boolean = true;
  @Output() sendData: EventEmitter<any> = new EventEmitter();

  constructor(private personaService: PersonaService) {

  }
  ngOnInit() {
    this.obtenerCollares()
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

  obtenerCollares() {
    this.personaService.obtenerUnicoCollar(1).subscribe(resultado => {

      this.collar = resultado;
    },
      error => {

        console.log(JSON.stringify(error));
      });


  }
}