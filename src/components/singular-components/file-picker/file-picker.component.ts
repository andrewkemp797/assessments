import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})
export class FilePickerComponent implements OnInit {
  @Input() photoArray: string[] = new Array();
  @Output() photoStream: EventEmitter<string[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onFilesSelected(event: any) {
   if (event.target.files && event.target.files.length) {
     for (let file of event.target.files) {
       const reader = new FileReader();
       reader.onload = () => {
         const imageFile = reader.result as string;
         this.photoArray.push(imageFile);
       }
       reader.readAsDataURL(file);
     }

     this.photoStream.emit(this.photoArray);
   }
  }
}
