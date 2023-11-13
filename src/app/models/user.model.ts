export class User {
    usuario: string;
    nombre: string;
    apellido: string;
    rut: string; // Agrega los campos que falten
    correo: string;
    carrera: string;
    telefono: string;
    region: string;
    direccion: string;
    hashContrasena: string;
    sal: string;
  
    constructor(
      usuario: string,
      nombre: string,
      apellido: string,
      rut: string,
      correo: string,
      carrera: string,
      telefono: string,
      region: string,
      direccion: string,
      contrasena: string
    ) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.apellido = apellido;
      this.rut = rut;
      this.correo = correo;
      this.carrera = carrera;
      this.telefono = telefono;
      this.region = region;
      this.direccion = direccion;
  
      // Generar hash y sal a partir de la contraseña
      const { hash, sal } = this.generarHashYSal(contrasena);
      this.hashContrasena = hash;
      this.sal = sal;
    }
  
    private generarHashYSal(contrasena: string): { hash: string; sal: string } {
      // Lógica para generar el hash y sal, utiliza bibliotecas o funciones de hash seguras
      // ...
      // Devuelve el hash y sal generados
      return { hash: 'hash_generado', sal: 'sal_generada' };
    }
  }
  