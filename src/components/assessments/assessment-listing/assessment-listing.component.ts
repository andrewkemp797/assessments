import { Component, OnInit } from '@angular/core';
import { AssessmentService } from 'src/services/assessment.service';
import { MotorAssessorReport } from 'src/models/motorAssessorReport';
import { take } from 'rxjs/operators';

@Component({
  selector: 'assessment-listing',
  templateUrl: './assessment-listing.component.html',
  styleUrls: ['./assessment-listing.component.scss']
})
export class AssessmentListingComponent implements OnInit {

  assessmentCollection: MotorAssessorReport[];

  constructor(private assessmentService: AssessmentService) { }

  ngOnInit() {
    this.subscribeToAssessments();
  }

  subscribeToAssessments() {
    this.assessmentService.listAssessments()
      .pipe(take(1))
      .subscribe(x => {
        this.assessmentCollection = x;
      });
  }
}
