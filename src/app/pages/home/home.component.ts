import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MessageService } from 'src/app/core/services/message/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public myFormMessage: string = '';

  constructor(private messageService: MessageService) {}

  public ngOnInit() {
    // Actualizamos la imagen de la home, perfecto para hacer un carrusel.
    this.messageService.getMessage().subscribe((value) => {
      this.myFormMessage = value;
    });

    // Ejemplo de lo que son los observables.
    // // Nuestro cliente es un subject.
    // const cliente: Subject<string> = new Subject<string>();
    // // El camamrero va a empezar a escuchar a el camarero con un suscirbe.
    // // Lo guardamos en una variable que va a estar suscrita.
    // const camamrero = cliente.subscribe((plato) => {
    //   // Exte codigo solo se va a escuchar mientras se haga un next.
    //   console.log(`Te sirvo ${plato}`);
    // })

    // // Nos Falta que el cliete empiece a pedir cosas. 
    // setTimeout(() => {
    //   cliente.next('patatas Vrabas')
    // }, 1000)
    // setTimeout(() => {
    //   cliente.next('Cerveza')
    // }, 5000)
    // setTimeout(() => {
    //   cliente.next('Copa y ha ganar')
    //   // Le indicamos que deje de escuchar.
    //   camamrero.unsubscribe();
    //   // Esta no va a llegar por que ha dejado de escuchar.
    //   cliente.next('La cuenta');
    // }, 8000)
  }
}
