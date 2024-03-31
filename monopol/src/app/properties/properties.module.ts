import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPropertiyComponent } from './add-propertiy/add-propertiy.component';
import { PropertyRoutingModule } from './property-routing.module';

@NgModule({
  declarations: [AddPropertiyComponent],
  imports: [CommonModule, PropertyRoutingModule],
})
export class PropertiesModule {}
