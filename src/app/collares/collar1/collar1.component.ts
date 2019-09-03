import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product, ProductApi } from '../../models/producto';
import { PersonaService } from 'src/app/servicio/persona.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collar1',
  templateUrl: './collar1.component.html',
  styleUrls: ['./collar1.component.css']
})
export class Collar1Component implements OnInit, OnDestroy {

  agregarTypeProducto: Product = { id: '', producname: '', type_product_id: '', price: '', description: '', quantiyy: '', image: '' }
  typec: ProductApi
  @Input() reciveData;
  private unsuscribe: Subscription;

  constructor(private personaService: PersonaService) {
  }
  ngOnInit() {
   this.unsuscribe = this.reciveData.subscribe(data => {
      this.typec=data
    })
   
  }
  ngOnDestroy(){
    this.unsuscribe.unsubscribe();
  }

  //obtener los collares
  ObetenerTypec(id) {
    this.personaService.obtenerTodosTypeCollar(id).subscribe(resultado => {

      this.typec =resultado;

      console.log(this.typec);
    },
      error => {

        console.log(JSON.stringify(error));
      });

  }



}
