import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroComponent } from './core/error/error.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { OptionsComponent } from './core/options/options.component';
import { ResultsComponent } from './core/results/results.component';
import { RotationComponent } from './core/rotation/rotation.component';
import { TestesComponent } from './core/testes/testes.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'rotation',component:RotationComponent
  },
  {
    path:'options',component:OptionsComponent
  },
  {
    path:'results',component:ResultsComponent
  },
  {
    path:'testes',component:TestesComponent
  },
  {
    path:'error',component:ErroComponent
  },
  {
    path:'**',component:ErroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
