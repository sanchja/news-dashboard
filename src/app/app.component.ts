import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  mArticles: Array<any>;
  mSources: Array<any>;
  sources;
  initArticles;
  articlesID;

  constructor(private newsapi: NewsApiService) { }

  ngOnInit() {
    // load articles
    const initArticles = this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    // load news sources
    const sources = this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
    }
    searchArticles(source) {
      console.log('selected source is: ' + source);
      const articlesID = this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
    }

  ngOnDestroy() {
    this.initArticles.OnDestroy();
    this.sources.OnDestroy();
    this.articlesID.OnDestroy();
  }
}
