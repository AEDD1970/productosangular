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

const routes: Routes=[
  { path: '', component: IndexComponent  },
  { path: 'index', component: IndexComponent  },
  { path: 'persona', component: PersonaComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
