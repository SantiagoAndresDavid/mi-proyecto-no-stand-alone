import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_ENDPOINTS } from '../../core/config/api-endpoints.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Un BehaviorSubject mantiene el último valor emitido
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  // Un Observable público que los componentes pueden suscribirse
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {
    // Comprobar si hay un token almacenado al iniciar
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedInSubject.next(true);
    }
  }

  login(email: string, password: string): Observable<any> {
    // Usar GET con parámetros como querystring (como especificaste)
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.get<any>(API_ENDPOINTS.AUTH.LOGIN, { params })
      .pipe(
        tap(response => {
          // Si la respuesta contiene un token, lo almacenamos
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            this.isLoggedInSubject.next(true);
          }
        })
      );
  }

  register(user: any): Observable<any> {
    // Usar POST para el registro (como especificaste)
    return this.http.post<any>(API_ENDPOINTS.AUTH.REGISTER, user);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }
}
