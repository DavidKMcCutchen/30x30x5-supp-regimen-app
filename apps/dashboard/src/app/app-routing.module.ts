import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppComponent } from './supps/supps.component';
import { LoginComponent, WildComponent } from "@supp-regimen/ui-login";
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'supps', component: SuppComponent},
  {path: 'wild', component: WildComponent},
  {path: 'login', component: LoginComponent},
  {path: '**',  redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
