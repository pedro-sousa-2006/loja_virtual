import { Routes } from '@angular/router';
import { Compras } from './compras/compras';
import { TelaInicial } from './tela-inicial/tela-inicial';
import { Login } from './login/login';
import { MinhasCompras } from './minhas-compras/minhas-compras';

export const routes: Routes = [
    {path:"produtos" , component:Compras},
    {path:"inicial" , component:TelaInicial},
    {path:"login", component:Login},
    {path:"minhasCompras" , component:MinhasCompras},
    {path:"" , pathMatch:"full" , redirectTo:"inicial"},

];
