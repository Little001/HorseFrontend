import {Component} from '@angular/core';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent {
  articles = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Duis viverra diam non justo. Nam sed tellus id magna elementum tincidunt. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. In dapibus augue non sapien. Nulla est. Fusce wisi. Fusce tellus. Donec vitae arcu. Fusce consectetuer risus a nunc."
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Duis viverra diam non justo. Nam sed tellus id magna elementum tincidunt. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. In dapibus augue non sapien. Nulla est. Fusce wisi. Fusce tellus. Donec vitae arcu. Fusce consectetuer risus a nunc."
    }
  ];
}
