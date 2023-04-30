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
  public vehiculosPorMarca: Array<{marca:string, cantidad:number}>=[]
constructor(private vehiculosService:VehiculosService){}
  ngOnInit(): void {
    this.getVehiculos();
  }


  private getVehiculos() {
    this.vehiculosService.getVehicles().subscribe(vehiculos => {
      this.vehiculos = vehiculos;

      this.calcularCantidadPorMarca();
    });
  }

  private calcularCantidadPorMarca() {
    let arrayInicial: Array<{marca:string, cantidad:number}> = [];
    this.vehiculosPorMarca = this.vehiculos.map(vehiculo => ({ marca: vehiculo.marca, cantidad:1 })).reduce((acc, marca) => {
      let marcaA = acc.find(value => value.marca == marca.marca);
      if (marcaA == undefined) {
        acc.push({
          marca: marca.marca,
          cantidad: 1
        });
      } else {
        marcaA.cantidad = marcaA.cantidad + 1;
      }
      return acc;
    }, arrayInicial);
  }
}
