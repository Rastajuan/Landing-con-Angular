import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  // Start Vars-Consts
  formularioContacto: FormGroup<any>;

  // End Vars-Consts

  // Start Functions
  hayErrores(controlName: string, errorType: string) {
    return this.formularioContacto.get(controlName)?.hasError(errorType) &&
      this.formularioContacto.get(controlName)?.touched;
  }

  enviar() {
    if (this.formularioContacto?.valid) {
      console.log('Formulario válido');
    } else {
      console.log('Formulario inválido');
      console.log(this.formularioContacto);
      console.table(this.formularioContacto.value);
    }
  }

  // End Functions


  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}
}
