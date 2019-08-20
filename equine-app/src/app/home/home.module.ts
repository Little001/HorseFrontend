import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import {NgbCarouselConfig, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ArticleThumbnailComponent } from "../shared/article";
import {ArticlesComponent} from "./articles.component";
import {ArticlePreviewComponent} from "../shared/article/preview";

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    HomeComponent,
    ArticlesComponent,
    ArticleThumbnailComponent,
    ArticlePreviewComponent
  ],
  providers: [
    HomeAuthResolver,
    NgbCarouselConfig
  ]
})
export class HomeModule {}
