import { Component } from '@angular/core';
import { BrowserQRCodeReader } from '@zxing/browser';

@Component({
  selector: 'app-login-alternativo',
  template: `
    <ion-content [fullscreen]="true">
      <button (click)="scanQRCode()">Escanear QR</button>
    </ion-content>
  `,
  styleUrls: ['./login-alternativo.page.scss'],
})
export class LoginAlternativoPage {
  constructor() {}

  scanQRCode() {
    const codeReader = new BrowserQRCodeReader();
    codeReader
      .decodeOnceFromVideoDevice(undefined, 'videoElement')
      .then((result) => {
        alert(`Código QR escaneado: ${result.getText()}`);
      })
      .catch((err) => {
        alert(`Error al escanear: ${err}`);
      });
  }
}
