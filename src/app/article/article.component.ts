import {Component, HostBinding, OnInit} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;

  constructor() {
    this.article = new Article(
      'Angular Tour of Heroes',
      'https://github.com/johnpapa/angular-tour-of-heroes',
      10
    );
  }

  votesUp() {
    this.article.votes += 1;
    return false;
  }

  votesDown() {
    this.article.votes -= 1;
    return false;
  }

  ngOnInit() {
  }

}
