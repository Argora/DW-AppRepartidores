import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogIn = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  usuario = {
    usuario: '',
    password: ''
  };
  listaUsuarios = [
    {usuario: 'Ariel',
    password: '1234'},
    {usuario: 'Gomez',
    password: '5678'},
    {usuario: 'Armando',
    password: '0000'}
  ];

  constructor(private router : Router,  public titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Inicio de sesión");
  }

  logIn(){
    var usuarioLogIn = this.formularioLogIn.value;
    if(this.formularioLogIn.valid){
      this.usuario = {
        usuario: usuarioLogIn.usuario,
        password: usuarioLogIn.password
      }
      this.confirmarUsuario();
    }else {
      Swal.fire(
        'Complete todos los campos',
        '',
        'warning',
      )
    }
  }

  confirmarUsuario(){
    let encontrado = false;
    this.listaUsuarios.forEach((usuarioReg) =>{
      if(usuarioReg.usuario == this.usuario.usuario){
        encontrado = true;
        if(usuarioReg.password == this.usuario.password){
          this.router.navigate(['ordenes'])
        }else{
          Swal.fire(
            'No se pudo iniciar sesión',
            'Contraseña incorrecta',
            'warning',
          )
        }
      }
    });

    if(!encontrado){
      Swal.fire(
        'No se pudo iniciar sesión',
        'Usuario no encontrado',
        'warning',
      )
    }
  }

}
