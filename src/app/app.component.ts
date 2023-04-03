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

  btnDirectivas:boolean = false;
  btnCalculadora:boolean = false;
  btnBindings:boolean = false;
  btnComponents:boolean = false;

  constructor(){
   this.nombre = "De milena";
   this.soyUnaFuncion();
  }

  //metodos
  public soyUnaFuncion(){
    this.nombre = "Villamizar"
  }

  opciones( opcion:number){

    switch(opcion) {
      case opcion =  10 : {
        this.btnDirectivas = true;
        this.btnCalculadora = false;
        this.btnBindings = false;
        this.btnComponents = false;

         break;
      }
      case opcion = 9: {
        this.btnDirectivas = false;
        this.btnCalculadora = true;
        this.btnBindings = false;
        this.btnComponents = false;
         break;
      }

      case opcion = 8: {
        this.btnDirectivas = false;
        this.btnCalculadora = false;
        this.btnBindings = true;
        this.btnComponents = false;
         break;
      }

      case opcion = 7: {
        this.btnDirectivas = false;
        this.btnCalculadora = false;
        this.btnBindings = false;
        this.btnComponents = true;
         break;
      }

      case opcion = 0: {
        this.btnDirectivas = false;
        this.btnCalculadora = false;
        this.btnBindings = false;
        this.btnComponents = false;
         break;
      }

      default: {
         //statements;
         break;
      }
   }

}
}
// primero se ejecutan las variables
// luego los metodos
// de ultimo el constructor


