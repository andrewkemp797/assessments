import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assessmentDetails: FormGroup;
  title = 'assessments';
  valueCollection = ["Good", "Poor", "Write-Off"];

  constructor(private swUpdate: SwUpdate, private fb: FormBuilder) {

  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available.  Load new version?")) {
          window.location.reload();
        }
      });
    }

    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.assessmentDetails = this.fb.group({
      motorAssessorReport: this.fb.group({
        Insurance: [''],
        Client: [''],
        ClaimNo: [''],
        Vehicle: [''],
        DateInspected: [Date.now()],
        EngineNo: [''],
        ChassisNo: [''],
        RegistrationNo: ['']
      }),
      vehicleCondition: this.fb.group({
        Odometer: [0],
        Steering: [''],
        Footbrake: [''],
        Handbrake: [''],
        Bodywork: [''],
        Windscreen: [''],
        Chassis: [''],
        Interior: [''],
        PaintCondition: [''],
        PaintColour: [''],
        AirConditioner: [''],
        MagWheels: [true],
        Sunroof: [true],
        Spotlights: [true],
        Towbar: [true],
        RunningBoards: [true],
        Radio: [true],
        Speakers: [0],
        CentralLocking: [true],
        Immobiliser: [true],
        BullBar: [true],
        BootSpoiler: [true],
        GeneralCondition: [''],
        MissingItems: [''],
        OldDamage: [''],
        TyreMake: [''],
        TyreThreadLF: [0],
        TyreThreadRF: [0],
        TyreThreadLR: [0],
        TyreThreadRR: [0],
        TyreThreadSpare: [0],
        VehicleInspectedAt: [''],
        QuotesObtainedFrom: [''],
      }),
      remarks: this.fb.group({
        remarks: ['']
      })
    });
  }
}
