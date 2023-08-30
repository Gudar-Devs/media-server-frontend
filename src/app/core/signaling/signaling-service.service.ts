import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignalingService {
  private socket: WebSocket;
  private messageSubject = new Subject<string>();
  
  constructor() {
    this.connect();
  }

  private connect() {
    const socketUrl = 'ws://ruta-de-tu-servidor-websocket';
    this.socket = new WebSocket(socketUrl);

    this.socket.onopen = (event) => {
      console.log('Conexión WebSocket establecida', event);
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Mensaje recibido:', data);
    };

    this.socket.onclose = (event) => {
      console.log('Conexión WebSocket cerrada', event);
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.messageSubject.next(data.message);
    };
  }

  getMessages() {
    return this.messageSubject.asObservable();
  }

  sendMessage(message: string) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ message }));
    }
  }

  closeConnection() {
    this.socket.close();
  }
}
