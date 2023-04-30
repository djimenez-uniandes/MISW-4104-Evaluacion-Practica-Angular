import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [
  { path: '', component: ListarVehiculosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
