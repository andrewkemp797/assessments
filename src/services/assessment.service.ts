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
    this.httpClient.post<string>(environment.endPoints.assessment.addAssessment(), motorAssessorReport)
      .subscribe();
  }

  listAssessments(): Observable<MotorAssessorReport[]> {
    return this.httpClient.get<MotorAssessorReport[]>(environment.endPoints.assessment.listAll());
  }

  getAssessmentById(id: number): Observable<MotorAssessorReport> {
    return this.httpClient.get<MotorAssessorReport>(environment.endPoints.assessment.assessmentById(id));
  }
}
