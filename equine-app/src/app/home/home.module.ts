import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import {NgbCarouselConfig, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeAuthResolver,
    NgbCarouselConfig
  ]
})
export class HomeModule {}
