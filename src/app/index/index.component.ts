import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public index = 0
  public timeOut = 5500

  public images = [
    'img_la.jpg',
    'lili-blanca.jpg',
    'rosa-negra.jpg',
  ]

  constructor() { }

  ngOnInit() {
    const carousel = () => {
      this.index++;
      if (this.index >= this.images.length) { this.index = 0 }
      setTimeout(carousel, this.timeOut); // Change image every 2 seconds
    }
    carousel();
  }

}
