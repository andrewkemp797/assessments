import { Component, OnInit } from '@angular/core';
import { MotorAssessorReport } from 'src/models/motorAssessorReport';

@Component({
  selector: 'app-motor-assessor-report',
  templateUrl: './motor-assessor-report.component.html',
  styleUrls: ['./motor-assessor-report.component.scss']
})
export class MotorAssessorReportComponent implements OnInit {

  public motorAssessorReport: MotorAssessorReport = new MotorAssessorReport();

  constructor() { }

  ngOnInit() {
  }

}
