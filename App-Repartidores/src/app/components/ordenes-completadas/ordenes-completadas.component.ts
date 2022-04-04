import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ordenes-completadas',
  templateUrl: './ordenes-completadas.component.html',
  styleUrls: ['./ordenes-completadas.component.css']
})
export class OrdenesCompletadasComponent implements OnInit {

  ordenesCompletadas = [
    {
      id: 5,
      despacho: 'Empresa a',
      entrega: 'Colonia m',
      hora: '10:00 am'
    },
    {
      id: 6,
      despacho: 'Empresa b',
      entrega: 'Colonia m',
      hora: '6:00 pm'
    }
  ]
  constructor(public titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Ordenes completadas");
  }

}
