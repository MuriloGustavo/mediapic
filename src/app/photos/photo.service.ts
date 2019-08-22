import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
