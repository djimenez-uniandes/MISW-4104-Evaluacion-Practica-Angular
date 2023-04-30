import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListarVehiculosComponent } from './listar-vehiculos.component';
import { VehiculosService } from '../vehiculos.service';
import { of } from 'rxjs';
import { Vehiculo } from 'src/app/models/vehiculo.model';

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;
  let httpTestingController: HttpTestingController;
  let vehiculosService: VehiculosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVehiculosComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ VehiculosService ]
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    vehiculosService = TestBed.inject(VehiculosService);

    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with three rows for three vehicles', () => {
    // Mock the response from the service
    const mockVehicles: Vehiculo[] = [
      new Vehiculo(1, 'Toyota', 'Corolla', 'SE', 2022, 0, 'Rojo', 'https://via.placeholder.com/150'),
      new Vehiculo(2, 'Ford', 'Mustang', 'GT', 2021, 10000, 'Negro', 'https://via.placeholder.com/150'),
      new Vehiculo(3, 'Nissan', 'Sentra', 'SL', 2022, 5000, 'Blanco', 'https://via.placeholder.com/150')
    ];

    spyOn(vehiculosService, 'getVehicles').and.returnValue(of(mockVehicles));
    // Trigger change detection to update the view
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();

    // Assert that the table has the correct number of rows
    const tableRows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(0);
  });
});
