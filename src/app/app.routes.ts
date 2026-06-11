import { Routes } from '@angular/router';
import { Compras } from './compras/compras';
import { TelaInicial } from './tela-inicial/tela-inicial';

export const routes: Routes = [
    {path:"produtos" , component:Compras},
    {path:"inicial" , component:TelaInicial},
    {path:"" , pathMatch:"full" , redirectTo:"inicial"}
];
