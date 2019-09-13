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
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { PulserasComponent } from './pulseras/pulseras/pulseras.component';
import { PulseraComponent } from './pulsera/pulsera.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes=[
  //rotes principalzz
  { path: '', component: IndexComponent  },
  { path: 'index', component: IndexComponent  },
  { path: 'persona', component: PersonaComponent },
  { path: 'collar', component: CollarComponent },
  { path: 'pulsera', component: PulseraComponent },
  //rotes secundary necklaces
  { path: 'collares/collar1', component: Collar1Component }
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
    MenuComponent,
    PulserasComponent,
    PulseraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AlifeFileToBase64Module,
    NgbModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
