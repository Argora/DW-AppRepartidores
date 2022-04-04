import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detalles-orden',
  templateUrl: './detalles-orden.component.html',
  styleUrls: ['./detalles-orden.component.css']
})
export class DetallesOrdenComponent implements OnInit {

  ordenesDisponibles = [
    {
      id: 1,
      estado: 0,
      despacho: 'Empresa x, barrio o, calle m',
      entrega: 'Colonia a, barrio y, calle z',
      hora: '12:00 pm',
      comision: 250,
      productos: [
        {nombre: 'producto1', precio: 100},
        {nombre: 'producto2', precio: 150}]
    },
    {
      id: 2,
      estado: 0,
      despacho: 'Empresa x, barrio o, calle m',
      entrega: 'Colonia a, barrio y, calle z',
      hora: '12:00 pm',
      comision: 50,
      productos: [
        {nombre: 'producto1', precio: 100},
        {nombre: 'producto2', precio: 100}]
    },
    {
      id: 3,
      estado: 0,
      despacho: 'Empresa x, barrio o, calle m',
      entrega: 'Colonia a, barrio y, calle z',
      hora: '5:00 am',
      comision: 200,
      productos: [
        {nombre: 'producto1', precio: 150},
        {nombre: 'producto2', precio: 150}]
    },
    {
      id: 4,
      estado: 0,
      despacho: 'Empresa x, barrio o, calle m',
      entrega: 'Colonia a, barrio y, calle z',
      hora: '2:00 pm',
      comision: 100,
      productos: [
        {nombre: 'producto1', precio: 200},
        {nombre: 'producto2', precio: 300}]
    },
  ]

  constructor(private route: ActivatedRoute, private _router : Router, public titleService: Title) { }

  ngOnInit(): void {
    this.obtenerIdOrden();
  }

  obtenerIdOrden(){
    const id = this.route.snapshot.paramMap.get('id')
    this.cambiarTitulo(id);
    this.obtenerDetallesOrden(id);
  }

  cambiarTitulo(id: any){
    this.titleService.setTitle("Detalles de orden "+id);
  }

  detallesOrden = {
    id: 0,
    estado: 0,
    despacho: '',
    entrega: '',
    hora: '',
    comision: 0,
    productos:[
      {nombre: '', precio:0}]
    };

  obtenerDetallesOrden(id: any){
    this.ordenesDisponibles.forEach(orden=>{
      if(orden.id == id){
        this.detallesOrden = orden;
        console.log(this.detallesOrden);
      }
    });
  }
}
