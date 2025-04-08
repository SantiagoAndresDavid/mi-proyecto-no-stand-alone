import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Crear el formulario con validaciones
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      const {email, password} = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        {
          next: () => { this.router.navigateByUrl('/dashboard'); },
          error: (error) => {
            this.errorMessage = error;
            this.loading = false;
          },
          complete: () => { this.loading = false; }
        }
      )
    }else {
      this.loginForm.markAllAsTouched();
    }
  }

}
