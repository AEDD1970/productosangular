import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicio/persona.service';
import { Product, ListProduct } from '../models/producto';

@Component({
  selector: 'app-collar',
  templateUrl: './collar.component.html',
  styleUrls: ['./collar.component.css']
})
export class CollarComponent implements OnInit {
  public listProduct: ListProduct[];
  constructor() {
    this.listProduct = [{ name: 'collar_one', url: 'collar1', image: 'https://uswitch-cms1.imgix.net/jekyll-cms-website/gas-electricity/guides/assets/images/gas-electricity/guides/energy-guides/electricity-comparison.jpg?ixlib=rb-1.1.0&amp;auto=format&amp;fit=max' },
    { name: 'collar_one', url: 'collar1', image: 'https://uswitch-cms1.imgix.net/jekyll-cms-website/gas-electricity/guides/assets/images/gas-electricity/guides/energy-guides/electricity-comparison.jpg?ixlib=rb-1.1.0&amp;auto=format&amp;fit=max' },
    { name: 'collar_one', url: 'collar1', image: 'https://uswitch-cms1.imgix.net/jekyll-cms-website/gas-electricity/guides/assets/images/gas-electricity/guides/energy-guides/electricity-comparison.jpg?ixlib=rb-1.1.0&amp;auto=format&amp;fit=max' },
    { name: 'collar_one', url: 'collar1', image: 'https://uswitch-cms1.imgix.net/jekyll-cms-website/gas-electricity/guides/assets/images/gas-electricity/guides/energy-guides/electricity-comparison.jpg?ixlib=rb-1.1.0&amp;auto=format&amp;fit=max' },
    { name: 'collar_one', url: 'collar1', image: 'https://uswitch-cms1.imgix.net/jekyll-cms-website/gas-electricity/guides/assets/images/gas-electricity/guides/energy-guides/electricity-comparison.jpg?ixlib=rb-1.1.0&amp;auto=format&amp;fit=max' },
    { name: 'collar_one', url: 'collar1', image: 'https://uswitch-cms1.imgix.net/jekyll-cms-website/gas-electricity/guides/assets/images/gas-electricity/guides/energy-guides/electricity-comparison.jpg?ixlib=rb-1.1.0&amp;auto=format&amp;fit=max' },
    { name: 'collar_one', url: 'collar1', image: 'https://uswitch-cms1.imgix.net/jekyll-cms-website/gas-electricity/guides/assets/images/gas-electricity/guides/energy-guides/electricity-comparison.jpg?ixlib=rb-1.1.0&amp;auto=format&amp;fit=max' },
    { name: 'collar_one', url: 'collar1', image: 'https://uswitch-cms1.imgix.net/jekyll-cms-website/gas-electricity/guides/assets/images/gas-electricity/guides/energy-guides/electricity-comparison.jpg?ixlib=rb-1.1.0&amp;auto=format&amp;fit=max' }]
  }



  ngOnInit() {

  }
}