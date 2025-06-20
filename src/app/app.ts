import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'clase_1_prueba';
   
  nombre='Emiliano';

  saludar(){
    alert('Hola a todos')
  }
  contador=0;
  incrementar(){
    this.contador=this.contador+1;
    if (this.contador==10){
      alert('Has llegado al máximo')
      this.contador=10
    }
  }
    decrementar(){
    this.contador=this.contador-1;
    if (this.contador==0){
      alert('Has llegado al minimo')
      this.contador=0
    }
  }
}
