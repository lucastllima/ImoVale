import { PropertieFormComponent } from './components/properties/propertie-form/propertie-form.component';
import { PropertiesComponent } from './views/properties/properties.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "imoveis",
    component: PropertiesComponent
  },
  {
    path: "imoveis/adicionar",
    component: PropertieFormComponent
  },
  {
    path: "imoveis/:id",
    component: PropertieFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
