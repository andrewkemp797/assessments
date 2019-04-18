import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MotorAssessorReport } from 'src/models/motorAssessorReport';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private httpClient: HttpClient) { }

  addAssessment(motorAssessorReport: MotorAssessorReport): void {
    const url = environment.endPoints.assessment.base + environment.endPoints.assessment.addAssessment;

    this.httpClient.post<string>(url, motorAssessorReport)
      .pipe(tap(x => console.log("Posted Assessment Response: " + x)))
      .subscribe();
  }

  listAssessments(): Observable<MotorAssessorReport[]> {
    return this.httpClient.get<MotorAssessorReport[]>(environment.endPoints.assessment.base + environment.endPoints.assessment.listAll);
  }

  getAssessmentById(id: number): Observable<MotorAssessorReport> {
    return this.httpClient.get<MotorAssessorReport>(environment.endPoints.assessment.base + environment.endPoints.assessment.assessmentById + id.toString());
  }
}
