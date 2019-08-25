import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
public admin:boolean = true;
  constructor(private route: Router) {
        this.route.events.subscribe(
        (event: any) => {
          if (event instanceof NavigationEnd) {
            
            if (event.urlAfterRedirects === '/persona') {
              this.admin= false;
            }else{
              this.admin= true;
            }
          }
        }
        );
   }

  ngOnInit() {
  }

}
