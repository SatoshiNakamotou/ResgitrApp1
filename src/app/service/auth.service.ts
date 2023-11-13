// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8100';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    console.log('ingresando a aut');
    const loginUrl = `${this.baseUrl}/login`;
    const body = { username, password };
    console.log('login url', loginUrl);
    console.log('login', body);
  
    return this.http.post(loginUrl, body).pipe(
      catchError((error) => {
        console.error('Error en la solicitud de login:', error);
        throw error; // Puedes lanzar el error nuevamente para que otros puedan manejarlo
      })
    );
  }

  isAuthenticated(): Promise<boolean> {
    // Verifica si hay un usuario autenticado almacenado en Preferences
    return Preferences.get({ key: 'user_authenticated' }).then((result) => {
      return result.value === 'true';
    });
  }

  saveAuthenticationStatus(status: boolean): Promise<void> {
    // Guarda el estado de autenticación en Preferences
    return Preferences.set({
      key: 'user_authenticated',
      value: status ? 'true' : 'false',
    });
  }
}
