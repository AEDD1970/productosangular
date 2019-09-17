import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  @ViewChild("modalForms", { read: "", static: true }) public modalForms;

  public index = 0;
  public timeOut = 5500;
  public images = ["img_la.jpg", "lili-blanca.jpg", "rosa-negra.jpg"];
  public logo = ["logo.PNG"];

  constructor(public NgbModal: NgbModal) {}

  ngOnInit() {
    const carousel = () => {
      
      this.index++;
      if (this.index >= this.images.length) {
        this.index = 0;
      }
      setTimeout(carousel, this.timeOut); // Change image every 2 seconds
    };
    carousel();
  }

  openRegister() {
    this.NgbModal.open(this.modalForms, { windowClass: "dark-modal" });
  }
}
