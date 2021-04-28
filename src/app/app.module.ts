import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatorComponent } from './creator/creator.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';

import {ListaTareasService} from './lista-tareas.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatorComponent,
    ListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [ListaTareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
