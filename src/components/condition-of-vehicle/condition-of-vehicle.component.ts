import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'condition-of-vehicle',
  templateUrl: './condition-of-vehicle.component.html',
  styleUrls: ['./condition-of-vehicle.component.scss']
})
export class ConditionOfVehicleComponent implements OnInit {

  @Input() conditionFormGroup: FormGroup;
  public conditionArray = ["Good", "Fair", "Poor"];
  public yesNoArray = [true, false];
  public radioArray = ["Factory Fitted", "After Market"];

  constructor() { }

  ngOnInit() {
  }
}
