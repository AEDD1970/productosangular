import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ViewChild,
  TemplateRef
} from "@angular/core";
import { Product, ProductApi } from "../../models/producto";
import { PersonaService } from "src/app/servicio/persona.service";
import { Subscription } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-collar1",
  templateUrl: "./collar1.component.html",
  styleUrls: ["./collar1.component.css"]
})
export class Collar1Component implements OnInit, OnDestroy {
  @ViewChild("modalForms", { read: "", static: true })
  modalForms: TemplateRef<HTMLElement>;

  @Input() reciveData;

  private unsuscribe: Subscription;
  private typeProduct: Product = {
    id: "",
    producname: "",
    type_product_id: "",
    price: "",
    description: "",
    quantiyy: "",
    image: ""
  };
  typec: ProductApi;
  public objectOption: any = [];
  public quantity: number = 0;

  constructor(
    private personaService: PersonaService,
    public ngbModal: NgbModal
  ) {
    console.log(this);
  }
  ngOnInit() {
    this.unsuscribe = this.reciveData.subscribe(data => {
      this.typec = data;
      this.objectOption = [];
      for (let index = 0; index < this.typec.quantiyy; index++) {
        this.objectOption.push({
          value: index + 1,
          option: (index + 1).toString() + " units"
        });
      }

      console.log(this.objectOption);
    });
  }
  ngOnDestroy() {
    this.unsuscribe.unsubscribe();
  }

  //obtener los collares
  ObetenerTypec(id) {
    this.personaService.obtenerTodosTypeCollar(id).subscribe(
      resultado => {
        this.typec = resultado;
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

  changeCountry() {
    console.log(this.quantity);
  }

  openMoldal() {
    this.ngbModal.open(this.modalForms, { windowClass: "dark-modal" });
  }
}
