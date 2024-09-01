import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploadComponent } from './files-upload.component';
import { FilesUploadDirective } from './files-upload.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { DropZoneDirective } from './directives';
import { UploadComponent } from './components/upload/upload.component';


@NgModule({
  declarations: [
    FilesUploadComponent,
    FilesUploadDirective,
    DropZoneDirective,
    UploadComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    FilesUploadDirective,
    DropZoneDirective
  ]
})
export class FilesUploadModule { }
