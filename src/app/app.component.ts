import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //variables
  public title = 'tianguis';
  nombre = "De Sandra";

  constructor(){
   this.nombre = "De milena";
   this.soyUnaFuncion();
  }

  //metodos
  public soyUnaFuncion(){
    this.nombre = "Villamizar"
  }
}

// primero se ejecutan las variables
// luego los metodos
// de ultimo el constructor


