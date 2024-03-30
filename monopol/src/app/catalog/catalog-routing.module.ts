import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPropertiesComponent } from './all-properties/all-properties.component';
import { SinglePropertyComponent } from './single-property/single-property.component';

const routes: Routes = [
  {
    path: 'catalog',
    children: [
      { path: '', pathMatch: 'full', component: AllPropertiesComponent },
      { path: ':houseId', component: SinglePropertyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
