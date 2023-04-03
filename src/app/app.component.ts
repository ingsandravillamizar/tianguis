import { Component } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //variables
  envi = environment.leccion;

  public title = 'tianguis';
  nombre = "De Sandra";

  btnDirectivas:boolean = false;
  btnCalculadora:boolean = false;
  btnBindings:boolean = false;
  btnComponents:boolean = false;
  btnCiclosdevida:boolean = false;
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
        this.btnCiclosdevida= false;

         break;
      }
      case opcion = 9: {
        this.btnDirectivas = false;
        this.btnCalculadora = true;
        this.btnBindings = false;
        this.btnComponents = false;
        this.btnCiclosdevida= false;
         break;
      }

      case opcion = 8: {
        this.btnDirectivas = false;
        this.btnCalculadora = false;
        this.btnBindings = true;
        this.btnComponents = false;
        this.btnCiclosdevida= false;
         break;
      }

      case opcion = 7: {
        this.btnDirectivas = false;
        this.btnCalculadora = false;
        this.btnBindings = false;
        this.btnComponents = true;
        this.btnCiclosdevida= false;
         break;
      }
      case opcion = 6: {
        this.btnDirectivas = false;
        this.btnCalculadora = false;
        this.btnBindings = false;
        this.btnComponents = false;
        this.btnCiclosdevida= true;
         break;
      }
      case opcion = 0: {
        this.btnDirectivas = false;
        this.btnCalculadora = false;
        this.btnBindings = false;
        this.btnComponents = false;
        this.btnCiclosdevida= false;
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


