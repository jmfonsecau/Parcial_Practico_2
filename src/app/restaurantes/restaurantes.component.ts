import { Component, OnInit } from '@angular/core';
import { RestauranteService } from './restaurantes.service';

@Component({
  selector: 'app-listar-restaurantes',
  templateUrl: './listar-restaurantes.component.html',
  styleUrls: ['./listar-restaurantes.component.css']
})
export class ListarRestaurantesComponent implements OnInit {

  restaurantes: any[] = [];
  restauranteConMayorPuntaje: any;

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit(): void {
    this.restauranteService.getRestaurantes().subscribe(data => {
      this.restaurantes = data;
      this.restauranteConMayorPuntaje = this.encontrarRestauranteConMayorPuntaje();
    });
  }

  encontrarRestauranteConMayorPuntaje(): any {
    return this.restaurantes.reduce((prev, current) => 
      (prev.score > current.score) ? prev : current
    );
  }

}
