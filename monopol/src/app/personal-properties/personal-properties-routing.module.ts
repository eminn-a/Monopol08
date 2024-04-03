import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnPropertiesComponent } from './own-properties/own-properties.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
  {
    path: 'personal-properties',
    component: OwnPropertiesComponent,
    canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalPropertyRoutingModule {}
