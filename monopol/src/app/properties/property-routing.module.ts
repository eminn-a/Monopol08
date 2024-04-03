import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertiyComponent } from './add-propertiy/add-propertiy.component';
import { AdminActivate } from '../guards/isAdmin.activate';
import { EditPropertyComponent } from './edit-property/edit-property.component';

const routes: Routes = [
  {
    path: 'add-property',
    component: AddPropertiyComponent,
    canActivate: [AdminActivate],
  },
  {
    path: 'edit',
    children: [
      {
        path: ':houseId',
        component: EditPropertyComponent,
        canActivate: [AdminActivate],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyRoutingModule {}
