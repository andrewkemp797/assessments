import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from './environments/environment';
import { LoginComponent } from './components/login/login.component';
import { MotorAssessorReportComponent } from './components/motor-assessor-report/motor-assessor-report.component';
import { ConditionOfVehicleComponent } from './components/condition-of-vehicle/condition-of-vehicle.component';
import { RepairableComponent } from './components/repairable/repairable.component';
import { RemarksComponent } from './components/remarks/remarks.component';
import { CustomMultiselectComponent } from './components/singular-components/custom-multiselect/custom-multiselect.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MotorAssessorReportComponent,
    ConditionOfVehicleComponent,
    RepairableComponent,
    RemarksComponent,
    CustomMultiselectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
