import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module'; // Importa las rutas
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent], // Declara los componentes
  imports: [
    CommonModule,
    AuthRoutingModule,// Importa las rutas correctamente
    ReactiveFormsModule
  ]
})
export class AuthModule { }
