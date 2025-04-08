import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';
  loading: boolean = false;
  //inyectas el formBuilder, el router y el servicio de autenticacion
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {
    //creas el formulario con las validaciones
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      idRole: [0, [Validators.required, Validators.minLength(1)]],
      roleName: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      //pones la carga en true
      this.loading = true;
      //inicializas las variables con los valores del formulario
      const {name, email, password, idRole, roleName} = this.registerForm.value;
      //creas un objeto con los valores del formulario
      const userData = {name, email, password, idRole, roleName};
      //llamas al servicio de registro
      this.authService.register(userData).subscribe({
        //si todo sale bien navegas al login
        next: (result) => {
          this.router.navigate(['/login'],{queryParams:{registered:true}});
        },
        //si hay un error lo capturas y lo guardas en la variable errorMessage
        error: (error) => {
          this.errorMessage = error.message;
          this.loading = false;
        },
        //si todo sale bien o mal pones la carga en false
        complete: () => { this.loading = false; }
      })
    }else {
      //si el formulario no es valido marcas todos los campos como tocados
      this.registerForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    // implementación real o vacío
  }

}
