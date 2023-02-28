import { ExitGuard } from './../../core/guards/exit.guard';
import { PlatesCreateComponent } from './plates-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component: PlatesCreateComponent,
    // La guardia la aplicamos tambien en el routing.module, desde aqui ya nos va a retornar un true o un false y no un null como asi ocurre si solo tenemos la guardia desde el app routing module.
    // Con lasy load no va a ser capaz de recoger los datos por eso se pone la guardia a nivel de la ruta hija.
    canDeactivate: [ExitGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatesCreateRoutingModule { }
