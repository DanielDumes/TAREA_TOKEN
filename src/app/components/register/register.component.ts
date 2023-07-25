import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; // Asegúrate de tener esta importación

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;

  constructor() {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Aquí puedes manejar la lógica para enviar el formulario al servidor.
    console.log(this.formReg.value);
  }

  onClick() {
    // Aquí puedes manejar la lógica para el inicio de sesión con Google.
  }

}
