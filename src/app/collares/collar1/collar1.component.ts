import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/producto';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-collar1',
  templateUrl: './collar1.component.html',
  styleUrls: ['./collar1.component.css']
})
export class Collar1Component implements OnInit {

  agregarTypeProducto: Product = { id: '', producname: '', type_product_id: '', price: '', description: '', quantiyy: '' }
  typec: Required<Product[]> = []


  constructor(private personaService: PersonaService) {
    this.ObetenerTypec();

  }
  ngOnInit() {
    this.ObetenerTypec();
  }

  //obtener los collares
  ObetenerTypec() {
    this.personaService.obtenerTodosTypeCollar().subscribe(resultado => {
    
      this.typec = resultado as any
    },
      error => {

        console.log(JSON.stringify(error));
      });

  }



}
