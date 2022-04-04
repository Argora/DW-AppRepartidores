import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ordenes-aceptadas',
  templateUrl: './ordenes-aceptadas.component.html',
  styleUrls: ['./ordenes-aceptadas.component.css']
})
export class OrdenesAceptadasComponent implements OnInit {

  ordenesAceptadas = [
    {
      id: 7,
      despacho: 'Empresa f',
      entrega: 'Colonia h',
      hora: '11:00 am'
    },
    {
      id: 8,
      despacho: 'Empresa f',
      entrega: 'Colonia g',
      hora: '3:00 pm'
    }
    ,
    {
      id: 9,
      despacho: 'Empresa g',
      entrega: 'Colonia g',
      hora: '4:00 pm'
    }
  ]

  constructor(public titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Ordenes aceptadas");
  }

}
