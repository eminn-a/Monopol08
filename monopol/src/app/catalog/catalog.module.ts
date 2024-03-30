import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPropertiesComponent } from './all-properties/all-properties.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AllPropertiesComponent],
  imports: [BrowserModule, CommonModule],
})
export class CatalogModule {}
