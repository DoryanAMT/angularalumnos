import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { Router } from '@angular/router';
import Alumno from '../../models/alumno';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrl: './create-alumno.component.css'
})
export class CreateAlumnoComponent {
  @ViewChild("cajaidalumno") idAlumno!: ElementRef;
  @ViewChild("cajanombre") nombre!: ElementRef;
  @ViewChild("cajaapellidos") apellidos!: ElementRef;
  @ViewChild("cajaimagen") imagen!: ElementRef;
  @ViewChild("cajaactivo") activo!: ElementRef;
  @ViewChild("cajaidcurso") idCurso!: ElementRef;

  constructor(
    private _service: ServiceLogin,
    private _router: Router
  ) { }

  insertarAlumno(): void {
    let idAlumno = parseInt(this.idAlumno.nativeElement.value)
    let nombre = this.nombre.nativeElement.value
    let apellidos = this.apellidos.nativeElement.value
    let imagen = this.imagen.nativeElement.value
    let activo = parseInt(this.activo.nativeElement.value)
    let idCurso = parseInt(this.idCurso.nativeElement.value)

    let newAlumno = new Alumno(idAlumno,nombre,apellidos,imagen,activo,idCurso,);
    
    this._service.insertAlumno(newAlumno).then(result => {
      this._router.navigate(["/activealumns"])
      console.log(result);
    })

  }
}
