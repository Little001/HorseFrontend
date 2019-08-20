import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-article-thumbnail',
  templateUrl: './thumbnail.html'
})
export class ArticleThumbnailComponent {
  @Input() title: string;
  @Input() image: string;
  @Input() id: number;
}
