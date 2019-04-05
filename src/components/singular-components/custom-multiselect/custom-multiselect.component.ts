import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'assessment-multiselect',
  templateUrl: './custom-multiselect.component.html',
  styleUrls: ['./custom-multiselect.component.scss']
})
export class CustomMultiselectComponent implements OnInit {

  @Input() labelText: string;

  constructor() { }

  ngOnInit() {
  }

}
