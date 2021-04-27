import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { ListEnderecoComponent } from './components/list-endereco/list-endereco.component';
import { StepperMaterialAngularComponent } from './components/stepper-material-angular/stepper-material-angular.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: AppHomeComponent,
        children: [],
    },
    { path: 'adicionar', component: StepperMaterialAngularComponent },
    { path: 'listar', component: ListEnderecoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
