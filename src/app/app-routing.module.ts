import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicialComponent } from './inicial/inicial.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inicial', component: InicialComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' } // Rota padrão redirecionando para o login
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
