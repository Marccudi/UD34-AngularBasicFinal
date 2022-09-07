import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UD34';
  numero = 0;
  oper = '';
  pantalla = '0';
  pantallaOp = '';
  decimal = false;

  del() {
    this.pantalla = '0';
    this.pantallaOp = '';
    this.oper = '';
  }

  operacion(simbolo: string) {
    this.numero = parseFloat(this.pantalla);
    this.pantallaOp = this.numero + simbolo;
    this.pantalla = '0';
    this.oper = simbolo;
    this.decimal = false;
  }

  igual() {
    switch (this.oper) {
      case '/':
        this.pantallaOp = this.pantallaOp + '' + this.pantalla;
        this.pantalla = ""+(this.numero / parseFloat(this.pantalla));
        break;
      case '*':
        this.pantallaOp = this.pantallaOp + '' + this.pantalla;
        this.pantalla = ""+(this.numero * parseFloat(this.pantalla));
        break;
      case '-':
        this.pantallaOp = this.pantallaOp + '' + this.pantalla;
        this.pantalla = ""+(this.numero - parseFloat(this.pantalla));
        break;
      case '+':
        this.pantallaOp = this.pantallaOp + '' + this.pantalla;
        this.pantalla = ""+(this.numero + parseFloat(this.pantalla));
        break;
    }
    this.oper = '';
  }
  punto() {
    this.decimal = true;
  }
  num(numero: string) {
    if (this.pantalla == '0') {
      if (this.decimal == true) {
        numero="0."+numero
      }
      this.pantalla = numero;
      this.decimal = false;
    } else {
      if (this.decimal == true) {
        this.pantalla = this.pantalla + '.' + numero;
      } else {
        this.pantalla = '' + this.pantalla + numero;
      }
      this.decimal = false;
    }
  }
}
