import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';
import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListarVehiculosComponent
  ],
  imports: [
    CommonModule,
    VehiculosRoutingModule,
  ]
})
export class VehiculosModule { }
