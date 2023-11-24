import { Component, OnInit } from '@angular/core';
import { RestauranteService } from './restaurantes.service'; // Asegúrate de ajustar la ruta según la ubicación de tu servicio

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes: any[] = []; // Define la variable para almacenar los datos de los restaurantes

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit(): void {
    this.restauranteService.getRestaurantes() // Llama al método del servicio para obtener los datos
      .subscribe(
        data => {
          this.restaurantes = data; // Asigna los datos obtenidos a la variable restaurantes
        },
        error => {
          console.error('Error al obtener los datos de los restaurantes:', error); // Manejo de errores
        }
      );
  }

}
