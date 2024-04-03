import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnPropertiesComponent } from './own-properties/own-properties.component';
import { PersonalPropertyRoutingModule } from './personal-properties-routing.module';

@NgModule({
  declarations: [OwnPropertiesComponent],
  imports: [CommonModule, PersonalPropertyRoutingModule],
})
export class PersonalPropertiesModule {}
