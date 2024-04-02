import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [AboutUsComponent, AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule],
})
export class AboutModule {}
