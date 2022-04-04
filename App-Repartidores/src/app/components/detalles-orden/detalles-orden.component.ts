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
        {nombre: 'producto1', precio: 190}]
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
        {nombre: 'producto2', precio: 150},
        {nombre: 'producto3', precio: 50},
        {nombre: 'producto4', precio: 120}]
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
        {nombre: 'producto2', precio: 300},
        {nombre: 'producto3', precio: 100}]
    },
    {
      id: 5,
      estado: 2,
      despacho: 'Empresa a, barrio z, calle t',
      entrega: 'Colonia m, barrio a, calle a',
      hora: '10:00 am',
      comision: 100,
      productos: [
        {nombre: 'producto1', precio: 200},
        {nombre: 'producto2', precio: 300}]
    },
    {
      id: 6,
      estado: 2,
      despacho: 'Empresa b, barrio t, calle m',
      entrega: 'Colonia m, barrio h, calle t',
      hora: '6:00 pm',
      comision: 70,
      productos: [
        {nombre: 'producto1', precio: 200},
        {nombre: 'producto2', precio: 20},
        {nombre: 'producto3', precio: 100},
        {nombre: 'producto4', precio: 40}]
    },
    {
      id: 7,
      estado: 1,
      despacho: 'Empresa f, barrio f, calle g',
      entrega: 'Colonia h, barrio f, calle t',
      hora: '11:00 am',
      comision: 170,
      productos: [
        {nombre: 'producto1', precio: 200},
        {nombre: 'producto2', precio: 200},
        {nombre: 'producto3', precio: 100}]
    },
    {
      id: 8,
      estado: 1,
      despacho: 'Empresa f, barrio f, calle g',
      entrega: 'Colonia g, barrio f, calle b',
      hora: '3:00 pm',
      comision: 150,
      productos: [
        {nombre: 'producto1', precio: 200},
        {nombre: 'producto2', precio: 500}]
    },
    {
      id: 9,
      estado: 2,
      despacho: 'Empresa g, barrio t, calle m',
      entrega: 'Colonia g, barrio g, calle t',
      hora: '4:00 pm',
      comision: 140,
      productos: [
        {nombre: 'producto1', precio: 200},
        {nombre: 'producto2', precio: 50},
        {nombre: 'producto3', precio: 100},
        {nombre: 'producto4', precio: 50},
        {nombre: 'producto4', precio: 50}]
    }
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
