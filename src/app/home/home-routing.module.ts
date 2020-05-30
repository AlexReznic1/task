import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {MainComponent} from "./main/main.component";


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: '' , redirectTo: 'campaigns', pathMatch: 'full'},
      {path: 'campaigns', component: MainComponent},
      {path: 'tariffs', component: MainComponent},
      {path: 'admin', component: MainComponent},
      {path: 'suppliers', component: MainComponent},
      {path: 'data', component: MainComponent},
      {path: 'costs', component: MainComponent},
      {path: 'reports', component: MainComponent},
      {path: 'settings', component: MainComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
