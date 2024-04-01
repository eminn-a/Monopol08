import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertiyComponent } from './add-propertiy/add-propertiy.component';
import { AuthActivate } from '../guards/auth.activate';
import { AdminActivate } from '../guards/isAdmin.activate';

const routes: Routes = [
  {
    path: 'add-property',
    component: AddPropertiyComponent,
    canActivate: [AdminActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyRoutingModule {}
