import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentListingComponent } from 'src/components/assessments/assessment-listing/assessment-listing.component';
import { AssessmentCaptureComponent } from 'src/components/assessments/assessment-capture/assessment-capture.component';
import { LoginComponent } from 'src/components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'listing',
    component: AssessmentListingComponent
  },
  {
    path: 'assessment',
    component: AssessmentCaptureComponent
  },
  {
    path: 'assessment/:id',
    component: AssessmentCaptureComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // {
  //   path: '*',
  //   component: NotFoundComponentToBeCreated
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
