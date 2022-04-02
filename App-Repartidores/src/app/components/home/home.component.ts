import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
      hora: '5:00 pm'
    },
    {
      id: 4,
      despacho: 'Empresa z',
      entrega: 'Colonia m',
      hora: '2:00 pm'
    }
  ]

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
