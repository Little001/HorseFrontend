import {Component, Input} from '@angular/core';
import { Article } from "../../core";

@Component({
  selector: 'app-article-preview',
  templateUrl: './preview.html'
})
export class ArticlePreviewComponent {
  @Input() article: Article;
}
