import { Component, OnInit } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import Alumno from '../../models/alumno';

@Component({
  selector: 'app-active-alumns',
  templateUrl: './active-alumns.component.html',
  styleUrl: './active-alumns.component.css'
})
export class ActiveAlumnsComponent implements OnInit{

  public alumnos !: Array<Alumno>

  constructor(
    private _service: ServiceLogin
  ){}

  ngOnInit(): void {
    this._service.getActiveAlumnos().then(response => {
      this.alumnos = response
    })
  }
}
