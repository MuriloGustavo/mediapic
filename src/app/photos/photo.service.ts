import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Photo } from './photo.model';
import { PhotosModule } from './photos.module';

@Injectable({
  providedIn: PhotosModule
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(userName: string) {
    return this.http.get<Photo[]>('http://localhost:3000/flavio/photos');
  }

}
