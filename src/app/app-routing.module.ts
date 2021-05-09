import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaDosComponent } from './ruta-dos/ruta-dos.component';
import { RutaTresComponent } from './ruta-tres/ruta-tres.component';
import { RutaUnoComponent } from './ruta-uno/ruta-uno.component';

const routes: Routes = [
  // se agregan las rutas que se desean
  {
    path: 'ruta-uno',
    component: RutaUnoComponent
  },
  {
    path: 'ruta-dos',
    component: RutaDosComponent
  },
  {
    path: 'ruta-tres',
    component: RutaTresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
