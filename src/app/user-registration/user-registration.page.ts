import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { RegionService } from '../service/region.service';
import { Region } from '../models/region.model';
import { User } from '../models/user.model';
import { NavController } from '@ionic/angular'; 
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.page.html',
  styleUrls: ['./user-registration.page.scss'],
})
export class UserRegistrationPage implements OnInit {
  regiones: Region[] = [];
  regionSeleccionada: Region = { id: 0, nombre: '' };

  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  rut: string = '';
  correo: string = '';
  carrera: string = '';
  telefono: string = '';
  region: string = '';
  direccion: string = '';
  contrasena: string = '';
  repetirContrasena: string = '';


  constructor(
    private regionService: RegionService,
    private navCtrl: NavController,
    private toastController: ToastController
    ) {}

  ngOnInit() {
    this.regionService.getRegiones().subscribe(response => {
      this.regiones = response.regiones;
      console.log(this.regiones);
    });
  }

  async guardarDatos() {
    // Verifica que las contraseñas coincidan
    if (this.contrasena !== this.repetirContrasena) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    // Lógica para guardar los datos del formulario en la instancia de User
    const nuevoUsuario = new User(
      this.usuario,
      this.nombre,
      this.apellido,
      this.rut,
      this.correo,
      this.carrera,
      this.telefono,
      this.region,
      this.direccion,
      this.contrasena
    );

    // Almacenar el usuario en Preferences
    await this.guardarUsuarioEnPreferences(nuevoUsuario);

    // Lógica para registrar al usuario en el servidor
    await this.registrarUsuarioEnServidor(nuevoUsuario);
  }

  async registrarUsuarioEnServidor(usuario: User): Promise<void> {
    try {
      // Aquí deberías hacer una solicitud HTTP al servidor para registrar el usuario
      // Puedes utilizar el servicio AuthService o crear un nuevo servicio para manejar las operaciones de registro
      // Ejemplo:
      // await this.authService.registrarUsuario(usuario);

      // Luego, maneja la respuesta del servidor según tus necesidades
      console.log('Usuario registrado exitosamente en el servidor');
    } catch (error) {
      console.error('Error al registrar el usuario en el servidor:', error);
      // Puedes mostrar un mensaje de error al usuario aquí
    }
  }

  registrar() {
    // Llama a la función validarCampos antes de ejecutar la lógica de guardarDatos
    if (this.validarCampos(
      this.usuario,
      this.nombre,
      this.apellido,
      this.rut,
      this.correo,
      this.carrera,
      this.telefono,
      this.region,
      this.direccion,
      this.contrasena,
      this.repetirContrasena
    )) {
      this.guardarDatos();
      // Aquí puedes agregar más lógica si es necesario
      this.mostrarMensajeRegistro()
      this.navCtrl.navigateForward('/home');
    }
  }
  

  cancelar() {
    // Lógica para cancelar el registro
    this.navCtrl.navigateForward('/home');
  }

  async guardarUsuarioEnPreferences(usuario: User): Promise<void> {
    try {
      const key = 'user_data_' + usuario.usuario;
      await Preferences.set({
        key: key,
        value: JSON.stringify(usuario),
      });
      console.log('Usuario almacenado en Preferences con clave:', key);
    } catch (error) {
      console.error('Error al almacenar el usuario en Preferences:', error);
    }
  }
  validarCampos(
    usuario: string, 
    nombre: string, 
    apellido: string, 
    rut: string, 
    correo: string,
    carrera: string, 
    telefono: string, 
    region: string, 
    direccion: string, 
    contrasena: string, 
    repetirContrasena: string
  ): boolean {
    // Lógica de validación aquí
    if (usuario ==   '') {
      alert('Favor ingresar usuario');
      return false;
    } 
    else if (nombre==   '') {
      alert('Favor ingresar nombre');
      return false;
    }
    else if (apellido==   '') {
      alert('Favor ingresar Apellido');
      return false;
    }
    else if (rut==   '') {
      alert('Favor ingresar Rut');
      return false;
    }
    else if (correo==   '') {
      alert('Favor ingresar Correo');
      return false;
    }
    else if (carrera==   '') {
      alert('Favor ingresar Carrera');
      return false;
    }
    else if (telefono==   '') {
      alert('Favor ingresar Telefono');
      return false;
    }
    else if (region=='') {
      alert('Favor ingresar Region');
      return false;
    }
    else if (direccion==   '') {
      alert('Favor ingresar Direccion');
      return false;
    }
    else if (contrasena!==repetirContrasena) {
      alert('contraseñas ingresadas no son coincidentes');
      return false;
    }
    return true;
  }
  async mostrarMensajeRegistro() {
    const toast = await this.toastController.create({
      message: 'Usuario registrado',
      duration: 4000, // Duración en milisegundos
      position: 'top', // Posición del toast (top, middle, bottom)
      color: 'success', // Color del toast (success, warning, danger, etc.)
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
        }
      ]
    });
  
    toast.present();
  }
}