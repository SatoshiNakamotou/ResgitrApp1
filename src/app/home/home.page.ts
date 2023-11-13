// home.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private navCtrl: NavController) {}

  ngOnInit() {
  }

  login(username: string, password: string): void {
    console.log('ingreso a login');
    this.authService.login(username, password).subscribe(
      (response: any) => {
        console.log('Login exitoso', response);
        // Guardar el estado de autenticación en Preferences
        this.authService.saveAuthenticationStatus(true).then(() => {
          console.log('ingreso a aith service');
          // Redirigir a la página principal o realizar alguna acción adicional
          this.navCtrl.navigateRoot('/dashboard'); // Ajusta la ruta según tu aplicación
        });
      },
      (error) => {
        console.error('Error de autenticación', error);
      }
    );
  }

  irARegistro(): void {
    this.navCtrl.navigateForward('/user-registration');
  }

  irARecuperarContrasena(): void {
    this.navCtrl.navigateForward('/recuperar-contrasena');
  }

  irloginAlternativo(): void {
    this.navCtrl.navigateForward('/login-alternativo');
  }

}
