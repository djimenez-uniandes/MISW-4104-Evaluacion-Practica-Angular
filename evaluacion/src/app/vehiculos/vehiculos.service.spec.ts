import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { VehiculosService } from './vehiculos.service';
import { Vehiculo } from '../models/vehiculo.model';
import { Observable } from 'rxjs';

describe('VehiculosService', () => {
  let service: VehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(VehiculosService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get vehicles',()=>{
    const httpMock = TestBed.inject(HttpTestingController);
    let vehiculos = [
      {
        "id": 1,
        "marca": "Renault",
        "linea": "Kangoo",
        "referencia": "VU Express",
        "modelo": 2017,
        "kilometraje": 93272,
        "color": "Blanco",
        "imagen": "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"
      },
      {
        "id": 2,
        "marca": "Chevrolet",
        "linea": "Spark",
        "referencia": "Life",
        "modelo": 2018,
        "kilometraje": 55926,
        "color": "Plata",
        "imagen": "https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg"
      },
      {
        "id": 3,
        "marca": "Chevrolet",
        "linea": "Sail",
        "referencia": "LT Sedan",
        "modelo": 2016,
        "kilometraje": 94321,
        "color": "Rojo",
        "imagen": "https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png"
      },
      {
        "id": 4,
        "marca": "Renault",
        "linea": "Sandero",
        "referencia": "New Authentique Life",
        "modelo": 2020,
        "kilometraje": 25629,
        "color": "Rojo",
        "imagen": "https://cdn.group.renault.com/ren/co/vehicles/sandero/home/nuevo-renault-sandero-rojo-fuego.jpg.ximg.xsmall.jpg/0b9611c786.jpg"
      },
      {
        "id": 5,
        "marca": "Nissan",
        "linea": "March",
        "referencia": "Active Plus",
        "modelo": 2019,
        "kilometraje": 31298,
        "color": "Plata",
        "imagen": "https://www.elcarrocolombiano.com/wp-content/uploads/2020/08/20200821-NISSAN-MARCH-ACTIVE-REDUCCION-DE-PRECIO-EN-COLOMBIA-01.jpg"
      },
      {
        "id": 6,
        "marca": "Chevrolet",
        "linea": "Tracker",
        "referencia": "New LS",
        "modelo": 2018,
        "kilometraje": 37827,
        "color": "Plata",
        "imagen": "https://secure-developments.com/commonwealth/uruguay/gm_forms/assets/front/images/jellys/60d4d4bc255a1.png"
      }
    ];
    service.getVehicles().subscribe(returnVehiculos =>{
      expect(returnVehiculos).toEqual(vehiculos)
    });
    let getVehicles = httpMock.expectOne('https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json')
    getVehicles.flush(vehiculos);
  })
});
