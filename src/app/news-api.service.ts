import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private apiKey = '3ad636c6bb2b4564b63b84f454b1f8e4';

  constructor(private http: HttpClient) {
  }

    initSources() {
      return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey);
   }
   initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=' + this.apiKey);
   }
   getArticlesByID(source: string) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.apiKey);
   }
   searchArticles(source: string) {
      return this.http.get('https://newsapi.org/v2/sources?language=en&country=us&apiKey=' + this.apiKey);
    }
}
