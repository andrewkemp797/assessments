import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MotorAssessorReport } from 'src/models/motorAssessorReport';
import { VehicleCondition } from 'src/models/vehicleCondition';
import { AssessmentService } from 'src/services/assessment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Photo } from 'src/models/photo';

@Component({
  selector: 'assessment-capture',
  templateUrl: './assessment-capture.component.html',
  styleUrls: ['./assessment-capture.component.scss']
})
export class AssessmentCaptureComponent implements OnInit {

  assessmentId: number;
  assessment: MotorAssessorReport;
  assessmentDetailsFormGroup: FormGroup;
  photos: string[] = [];

  constructor(
    private assessmentService: AssessmentService,
    private fb: FormBuilder,
    private currentRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.initializeFormGroup();
    if (this.currentRoute.snapshot.paramMap.get('id')) {
      this.assessmentId = Number.parseInt(this.currentRoute.snapshot.paramMap.get('id'));
      this.subscribeToAssessment();
    }
  }

  initializeFormGroup() {
    this.assessmentDetailsFormGroup = this.fb.group({
      motorAssessorReport: this.fb.group(new MotorAssessorReport()),
      vehicleCondition: this.fb.group(new VehicleCondition())
    });
  }

  initializeEditFormGroup() {

    if (this.assessment.Photos) {
      this.assessment.Photos.forEach(x => {
        console.log(x.PhotoBase64);
        this.photos.push(x.PhotoBase64);
      })
    }

    this.assessmentDetailsFormGroup.get('motorAssessorReport.Insurance').patchValue(this.assessment.Insurance);
    this.assessmentDetailsFormGroup.get('motorAssessorReport.Client').patchValue(this.assessment.Client);
    this.assessmentDetailsFormGroup.get('motorAssessorReport.ClaimNo').patchValue(this.assessment.ClaimNo);
    this.assessmentDetailsFormGroup.get('motorAssessorReport.Vehicle').patchValue(this.assessment.Vehicle);
    this.assessmentDetailsFormGroup.get('motorAssessorReport.DateInspected').patchValue(this.assessment.DateInspected);
    this.assessmentDetailsFormGroup.get('motorAssessorReport.EngineNo').patchValue(this.assessment.EngineNo);
    this.assessmentDetailsFormGroup.get('motorAssessorReport.ChassisNo').patchValue(this.assessment.ChassisNo);
    this.assessmentDetailsFormGroup.get('motorAssessorReport.RegistrationNo').patchValue(this.assessment.RegistrationNo);

    this.assessmentDetailsFormGroup.get('vehicleCondition.Odometer').patchValue(this.assessment.VehicleCondition.Odometer);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Steering').patchValue(this.assessment.VehicleCondition.Steering);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Footbrake').patchValue(this.assessment.VehicleCondition.Footbrake);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Handbrake').patchValue(this.assessment.VehicleCondition.Handbrake);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Bodywork').patchValue(this.assessment.VehicleCondition.Bodywork);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Windscreen').patchValue(this.assessment.VehicleCondition.Windscreen);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Chassis').patchValue(this.assessment.VehicleCondition.Chassis);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Interior').patchValue(this.assessment.VehicleCondition.Interior);
    this.assessmentDetailsFormGroup.get('vehicleCondition.PaintCondition').patchValue(this.assessment.VehicleCondition.PaintCondition);
    this.assessmentDetailsFormGroup.get('vehicleCondition.PaintColour').patchValue(this.assessment.VehicleCondition.PaintColour);
    this.assessmentDetailsFormGroup.get('vehicleCondition.AirConditioner').patchValue(this.assessment.VehicleCondition.AirConditioner);
    this.assessmentDetailsFormGroup.get('vehicleCondition.MagWheels').patchValue(this.assessment.VehicleCondition.MagWheels);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Sunroof').patchValue(this.assessment.VehicleCondition.Sunroof);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Spotlights').patchValue(this.assessment.VehicleCondition.Spotlights);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Towbar').patchValue(this.assessment.VehicleCondition.Towbar);
    this.assessmentDetailsFormGroup.get('vehicleCondition.RunningBoards').patchValue(this.assessment.VehicleCondition.RunningBoards);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Radio').patchValue(this.assessment.VehicleCondition.Radio);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Speakers').patchValue(this.assessment.VehicleCondition.Speakers);
    this.assessmentDetailsFormGroup.get('vehicleCondition.CentralLocking').patchValue(this.assessment.VehicleCondition.CentralLocking);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Immobiliser').patchValue(this.assessment.VehicleCondition.Immobiliser);
    this.assessmentDetailsFormGroup.get('vehicleCondition.BullBar').patchValue(this.assessment.VehicleCondition.BullBar);
    this.assessmentDetailsFormGroup.get('vehicleCondition.BootSpoiler').patchValue(this.assessment.VehicleCondition.BootSpoiler);
    this.assessmentDetailsFormGroup.get('vehicleCondition.GeneralCondition').patchValue(this.assessment.VehicleCondition.GeneralCondition);
    this.assessmentDetailsFormGroup.get('vehicleCondition.MissingItems').patchValue(this.assessment.VehicleCondition.MissingItems);
    this.assessmentDetailsFormGroup.get('vehicleCondition.OldDamage').patchValue(this.assessment.VehicleCondition.OldDamage);
    this.assessmentDetailsFormGroup.get('vehicleCondition.TyreMake').patchValue(this.assessment.VehicleCondition.TyreMake);
    this.assessmentDetailsFormGroup.get('vehicleCondition.TyreThreadLF').patchValue(this.assessment.VehicleCondition.TyreThreadLF);
    this.assessmentDetailsFormGroup.get('vehicleCondition.TyreThreadRF').patchValue(this.assessment.VehicleCondition.TyreThreadRF);
    this.assessmentDetailsFormGroup.get('vehicleCondition.TyreThreadLR').patchValue(this.assessment.VehicleCondition.TyreThreadLR);
    this.assessmentDetailsFormGroup.get('vehicleCondition.TyreThreadRR').patchValue(this.assessment.VehicleCondition.TyreThreadRR);
    this.assessmentDetailsFormGroup.get('vehicleCondition.TyreThreadSpare').patchValue(this.assessment.VehicleCondition.TyreThreadSpare);
    this.assessmentDetailsFormGroup.get('vehicleCondition.VehicleInspectedAt').patchValue(this.assessment.VehicleCondition.VehicleInspectedAt);
    this.assessmentDetailsFormGroup.get('vehicleCondition.QuotesObtainedFrom').patchValue(this.assessment.VehicleCondition.QuotesObtainedFrom);
    this.assessmentDetailsFormGroup.get('vehicleCondition.Remarks').patchValue(this.assessment.VehicleCondition.Remarks);
  }

  subscribeToAssessment() {
    this.assessmentService.getAssessmentById(this.assessmentId)
      .pipe(take(1))
      .subscribe(
      x => { 
        this.assessment = x;
        console.log(x);
      },
      error => {},
      () => { this.initializeEditFormGroup(); }
    );
  }

  receiveSelectedPhotos(photosArray: string[]) {
    this.photos = photosArray;
  }

  public submitAssessment(): void {
    const value = this.assessmentDetailsFormGroup.value;

    //Need to do a deep copy of object, to prevent weird behaviour if objects get modified down the line
    const motorAssessorReport = Object.assign({}, value['motorAssessorReport']) as MotorAssessorReport;
    const vehicleCondition = Object.assign({}, value['vehicleCondition']) as VehicleCondition;

    motorAssessorReport.VehicleCondition = vehicleCondition;
    motorAssessorReport.Photos = this.photos
      .map(x => Object.assign(new Photo, 
        { 
          Id: motorAssessorReport.Id, 
          PhotoBase64: x, 
          MotorAssessorReportId: motorAssessorReport.Id 
        }
      ));

    if (this.assessmentDetailsFormGroup.valid) {
      this.assessmentService.addAssessment(motorAssessorReport);
    }

    this.router.navigate(['/listing']);
  }
}
