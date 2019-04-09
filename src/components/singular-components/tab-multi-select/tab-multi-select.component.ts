import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tab-multi-select',
  templateUrl: './tab-multi-select.component.html',
  styleUrls: ['./tab-multi-select.component.scss']
})
export class TabMultiSelectComponent implements OnInit {

  @Input() labelText: string;
  @Input() formControlNameReference: string;
  @Input() valueCollection: string[] = new Array();

  constructor() { }

  ngOnInit() {
  }
}
