import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular Reddit Clone';
    this.link = 'https://github.com/usbpendrive/angular-reddit-clone';
    this.votes = 6;
  }

  votesUp() {
    this.votes += 1;
    return false;
  }

  votesDown() {
    this.votes -= 1;
    return false;
  }

  ngOnInit() {
  }

}
