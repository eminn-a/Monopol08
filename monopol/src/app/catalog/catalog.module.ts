import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPropertiesComponent } from './all-properties/all-properties.component';
import { SinglePropertyComponent } from './single-property/single-property.component';
import { CatalogRoutingModule } from './catalog-routing.module';

@NgModule({
  declarations: [AllPropertiesComponent, SinglePropertyComponent],
  imports: [CommonModule, CatalogRoutingModule],
})
export class CatalogModule {}
