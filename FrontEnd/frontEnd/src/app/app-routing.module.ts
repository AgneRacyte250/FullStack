import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousingListComponent } from './components/housing-list/housing-list.component';
import { HousingCreateComponent } from './components/housing-create/housing-create.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'housing-list', component: HousingListComponent },
  { path: 'housing-create', component: HousingCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
