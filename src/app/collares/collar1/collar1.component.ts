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

   public objectOption: any = [];
  public quantity:number = 0;
  constructor(private personaService: PersonaService) {
  }
  ngOnInit() {
   this.unsuscribe = this.reciveData.subscribe(data => {
      this.typec=data
      this.objectOption=[];
      for (let index = 0; index < this.typec.quantiyy; index++) {
        this.objectOption.push({value:index+1,option:(index+1).toString()+' feet'})
        
      }

      console.log( this.objectOption);
    })
   
  }
  ngOnDestroy(){
    this.unsuscribe.unsubscribe();
  }

  //obtener los collares
  ObetenerTypec(id) {
    this.personaService.obtenerTodosTypeCollar(id).subscribe(resultado => {
     
      this.typec =resultado;

     
    },
      error => {

        console.log(JSON.stringify(error));
      });

  }

  changeCountry(){
console.log(this.quantity)
  }



}
