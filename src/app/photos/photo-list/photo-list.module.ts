import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { SearchComponent } from './search/search.component';

import { FilterByDescriptionPipe } from './filter-by-description.pipe';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    SearchComponent,
    FilterByDescriptionPipe
  ],
  imports: [
    CommonModule,

    PhotoModule,
    CardModule,
    DarkenOnHoverModule
  ],
  exports: []
})
export class PhotoListModule { }
