import { Component, OnInit } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  public cursos!: Array<number>

  constructor(
    private _service: ServiceLogin
  ){}
  
  ngOnInit(): void {
    this._service.getCursos().then(result => {
      // console.log(result);
      this.cursos = result
    })
  }
}
