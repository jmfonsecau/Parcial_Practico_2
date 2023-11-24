import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-detalle-restaurante',
  templateUrl: './detalle-restaurante.component.html',
  styleUrls: ['./detalle-restaurante.component.css']
})
export class DetalleRestauranteComponent implements OnInit {

  @Input() restaurante: any; 

  constructor() { }

  ngOnInit(): void {
   
  }

}
