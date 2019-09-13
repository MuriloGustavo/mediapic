import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  readonly url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`${this.url}${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Photo[]>(`${this.url}${userName}/photos`, { params });
  }

}
