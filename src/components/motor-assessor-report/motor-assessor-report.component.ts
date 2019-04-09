import { Component, OnInit, Input } from '@angular/core';
import { MotorAssessorReport } from 'src/models/motorAssessorReport';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'motor-assessor-report',
  templateUrl: './motor-assessor-report.component.html',
  styleUrls: ['./motor-assessor-report.component.scss']
})
export class MotorAssessorReportComponent implements OnInit {

  @Input() motorAssessorReportFB: FormBuilder;

  constructor() { }

  ngOnInit() {
  }

}
