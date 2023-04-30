import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from 'src/app/models/vehiculo.model';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.scss']
})
export class ListarVehiculosComponent implements OnInit{
  public vehiculos:Vehiculo[] = [];
constructor(private vehiculosService:VehiculosService){}
  ngOnInit(): void {
    this.vehiculosService.getVehicles().subscribe(vehiculos =>{
      this.vehiculos = vehiculos;
    })
  }

}
