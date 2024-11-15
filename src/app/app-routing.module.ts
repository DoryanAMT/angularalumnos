import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ActiveAlumnsComponent } from './components/active-alumns/active-alumns.component';
import { HomeComponent } from './components/home/home.component';
import { CreateAlumnoComponent } from './components/create-alumno/create-alumno.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"activealumns", component: ActiveAlumnsComponent},
  {path:"createalumno", component: CreateAlumnoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
