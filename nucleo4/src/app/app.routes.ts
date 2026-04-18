import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Error404page } from './pages/error404page/error404page';
import { CarritoPage } from './pages/carrito-page/carrito-page';
import { DetallesPage } from './pages/detalles-page/detalles-page';
import { loginGuard } from './guards/login-guard-guard';

export const routes: Routes = [

    {path:'home',component:Home},
    {path:'productos',component:Productos, canActivate: [loginGuard] },
    {path:'login',component:Login},
    {path:'registro',component:Registro},
    {path:'carrito', component:CarritoPage},
    {path:'detalles/:id', component:DetallesPage},

    {path:'**', component:Error404page}  //te rediregi al error 404 si no encuentra la ruta




];
