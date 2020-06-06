import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpService: HttpClient) { }

  public getPosts(): Promise<any> {
    return this.httpService.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@austendewolf').toPromise();
  }
}
