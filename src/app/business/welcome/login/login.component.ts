import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
    imports: [
        RouterLink,
        RouterOutlet
    ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private router: Router) {}


  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      localStorage.removeItem('token');
      console.log('T')
    }
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });

  }


  // Método de envío del formulario
  onSubmit() {
    this.submitted = true;


    // Si el formulario es inválido, no procede
    if (this.loginForm.invalid) {
      return;
    }


    // Aquí puedes implementar la lógica de autenticación
    if (this.loginForm.value.usuario === 'admin' && this.loginForm.value.contrasena === 'admin123') {
      // Redirigir a otra ruta, por ejemplo, dashboard
      this.router.navigate(['/admin']);
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }
}
