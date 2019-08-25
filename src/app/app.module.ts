import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import{PersonaService} from'./servicio/persona.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import{ RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { CollarComponent } from './collar/collar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Collar1Component } from './collares/collar1/collar1.component';
import { Collar2Component } from './collares/collar2/collar2.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes=[
  //rotes principalzz
  { path: '', component: IndexComponent  },
  { path: 'index', component: IndexComponent  },
  { path: 'persona', component: PersonaComponent },
  { path: 'collar', component: CollarComponent },
  //rotes secundary necklaces
  { path: 'collar/collar1', component: Collar1Component },
  { path: 'collar2', component: Collar2Component }
]


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    IndexComponent,
    CollarComponent,
    FilterPipe,
    Collar1Component,
    Collar2Component,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
