import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {

  registroForm!: FormGroup;
  enviado = false;
  datosRegistrados: any = null;
  showPassword = false;
  showConfirmPassword = false;
  passwordStrength: string = '';
  passwordStrengthClass: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      nombreUsuario: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      confirmarContrasena: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(15), Validators.max(90)]],
      terminosCondiciones: [false, [Validators.requiredTrue]]
    }, { validators: this.validarContrasenas });
  }

  validarContrasenas(group: AbstractControl): ValidationErrors | null {
    const contrasena = group.get('contrasena')?.value;
    const confirmarContrasena = group.get('confirmarContrasena')?.value;

    if (contrasena && confirmarContrasena && contrasena !== confirmarContrasena) {
      return { contrasenasNoCoinciden: true };
    }
    return null;
  }

  evaluarFortalezaContrasena(): void {
    const contrasena = this.registroForm.get('contrasena')?.value || '';

    if (!contrasena) {
      this.passwordStrength = '';
      this.passwordStrengthClass = '';
      return;
    }

    let puntaje = 0;

    if (contrasena.length >= 8) puntaje++;
    if (contrasena.length >= 12) puntaje++;
    if (/[a-z]/.test(contrasena) && /[A-Z]/.test(contrasena)) puntaje++;
    if (/\d/.test(contrasena)) puntaje++;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(contrasena)) puntaje++;

    if (puntaje <= 2) {
      this.passwordStrength = 'Débil';
      this.passwordStrengthClass = 'debil';
    } else if (puntaje <= 3) {
      this.passwordStrength = 'Media';
      this.passwordStrengthClass = 'media';
    } else {
      this.passwordStrength = 'Fuerte';
      this.passwordStrengthClass = 'fuerte';
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      this.enviado = true;
      const formValue = { ...this.registroForm.value };
      delete formValue.contrasena;
      delete formValue.confirmarContrasena;
      this.datosRegistrados = formValue;
    }
  }

  reiniciarFormulario(): void {
    this.registroForm.reset();
    this.enviado = false;
    this.datosRegistrados = null;
    this.passwordStrength = '';
    this.passwordStrengthClass = '';
    this.showPassword = false;
    this.showConfirmPassword = false;
  }

  get f() {
    return this.registroForm.controls;
  }
}
