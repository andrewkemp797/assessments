import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MotorAssessorReport } from 'src/models/motorAssessorReport';
import { VehicleCondition } from 'src/models/vehicleCondition';
import { AssessmentService } from 'src/services/assessment.service';

@Component({
  selector: 'assessment-capture',
  templateUrl: './assessment-capture.component.html',
  styleUrls: ['./assessment-capture.component.scss']
})
export class AssessmentCaptureComponent implements OnInit {

  assessmentDetails: FormGroup;
  title = 'assessments';
  photosArray: string[];
  valueCollection = ["Good", "Poor", "Write-Off"];

  constructor(private assessmentService: AssessmentService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
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
        Remarks: ['']
      })
    });
  }

  receiveSelectedPhotos(photosArray: string[]) {
    console.log('Photos Array:  ' + photosArray);
    this.photosArray = photosArray;
  }

  public submitAssessment(): void {

    const motorAssessorReport = this.assessmentDetails.get('motorAssessorReport').value as MotorAssessorReport;
    const vehicleCondition = this.assessmentDetails.get('vehicleCondition').value as VehicleCondition;

    //bad...Need to change this:
    motorAssessorReport.VehicleCondition = vehicleCondition;

    if (this.assessmentDetails.valid) {
      this.assessmentService.addAssessment(motorAssessorReport);
    }
  }
}
