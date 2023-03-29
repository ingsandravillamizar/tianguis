import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiclosDeVidaComponent } from './clases/ciclos-de-vida/ciclos-de-vida.component';
import { ComponentesComponent } from './clases/componentes/componentes.component';
import { BindingsComponent } from './clases/bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './clases/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    CiclosDeVidaComponent,
    BindingsComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
