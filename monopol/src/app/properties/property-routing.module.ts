import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertiyComponent } from './add-propertiy/add-propertiy.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
  {
    path: 'add-property',
    component: AddPropertiyComponent,
    canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyRoutingModule {}
