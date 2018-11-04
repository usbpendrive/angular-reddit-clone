import { Component } from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular Tour of Heroes', 'https://github.com/johnpapa/angular-tour-of-heroes', 3),
      new Article('Angular for Beginners Guide',
        'https://blog.angular-university.io/getting-started-with-angular-setup-a-development-environment-with-' +
        'yarn-the-angular-cli-setup-an-ide/', 2),
      new Article('Getting Started with Angular', 'https://www.ag-grid.com/angular-getting-started/', 1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
