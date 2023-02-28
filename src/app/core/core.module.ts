import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent
  ], providers: [
    // Si tenemos mas de un interceptro aplica en cascada.
    // Para usar los interceptor el siguiente codigo entre llaves.
    {
      // Quiero proeveer como interceptor http mi aplicacion la calse authInterceptor.
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      // Multi es para tener mas de un interceptor aplicando a el mismo tiempo en la aplicacion.
      multi: true
    }, // Si queremos añadir otro interceptor repetimos copiamos el codigo anterior.
    // {
    //   provide: HTTP_INTERCEPTORS,
                // Cambiamos la clase a interceptar.
    //   useClass: loadingInterceptor, // Que es el nombre de la clase de el interceptor.
    //   multi: true
    // } 
  ]
})
export class CoreModule { }
