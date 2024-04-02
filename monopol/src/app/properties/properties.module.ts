import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPropertiyComponent } from './add-propertiy/add-propertiy.component';
import { PropertyRoutingModule } from './property-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPropertyComponent } from './edit-property/edit-property.component';

@NgModule({
  declarations: [AddPropertiyComponent, EditPropertyComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PropertiesModule {}
