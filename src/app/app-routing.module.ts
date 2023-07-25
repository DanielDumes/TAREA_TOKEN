import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes propios
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [
  

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/home']))
  },
  {
    path: 'heroes',
    component: HeroesComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
  
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  


];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
