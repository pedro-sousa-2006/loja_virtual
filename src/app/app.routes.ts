import { Routes } from '@angular/router';
import { Compras } from './compras/compras';
import { TelaInicial } from './tela-inicial/tela-inicial';
import { Login } from './login/login';
import { MinhasCompras } from './minhas-compras/minhas-compras';
import { Cadastro } from './cadastro/cadastro';
import { Checkout } from './checkout/checkout';
import { CadastrarProduto } from './cadastrar-produto/cadastrar-produto';

export const routes: Routes = [
    {path:"produtos" , component:Compras},
    {path:"produtos/checkout", component:Checkout},
    {path:"inicial" , component:TelaInicial},
    {path:"login", component:Login},
    {path:"produtos/cadastrarProduto" , component:CadastrarProduto},
    {path:"minhasCompras" , component:MinhasCompras},
    {path:"cadastro" , component:Cadastro},
    {path:"" , pathMatch:"full" , redirectTo:"inicial"},

];
