import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from './environments/environment';
import { LoginComponent } from './components/login/login.component';
import { MotorAssessorReportComponent } from './components/motor-assessor-report/motor-assessor-report.component';
import { ConditionOfVehicleComponent } from './components/condition-of-vehicle/condition-of-vehicle.component';
import { RepairableComponent } from './components/repairable/repairable.component';
import { TabMultiSelectComponent } from './components/singular-components/tab-multi-select/tab-multi-select.component';
import { FilePickerComponent } from './components/singular-components/file-picker/file-picker.component';
import { AssessmentListingComponent } from './components/assessments/assessment-listing/assessment-listing.component';
import { AssessmentCaptureComponent } from './components/assessments/assessment-capture/assessment-capture.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MotorAssessorReportComponent,
    ConditionOfVehicleComponent,
    RepairableComponent,
    TabMultiSelectComponent,
    FilePickerComponent,
    AssessmentListingComponent,
    AssessmentCaptureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
