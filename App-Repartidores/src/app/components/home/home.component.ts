import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faToggleOff = faToggleOff;
  ordenesDisponibles = [
    {
      id: 1,
      despacho: 'Empresa x',
      entrega: 'Colonia a',
      hora: '12:00 pm'
    },
    {
      id: 2,
      despacho: 'Empresa y',
      entrega: 'Colonia a',
      hora: '12:00 pm'
    },
    {
      id: 3,
      despacho: 'Empresa y',
      entrega: 'Colonia n',
      hora: '5:00 am'
    },
    {
      id: 4,
      despacho: 'Empresa z',
      entrega: 'Colonia m',
      hora: '2:00 pm'
    }
  ]

  constructor(private router : Router, public titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Ordenes Disponibles");
  }

  cambiarEstado(){
    console.log('cambiar estado repartidor');
  }

}
