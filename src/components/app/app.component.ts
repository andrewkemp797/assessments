import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assessments';
  valueCollection = ["Good", "Poor", "Write-Off"];

  constructor(private swUpdate: SwUpdate) {

  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available.  Load new version?")) {
          window.location.reload();
        }
      });
    }
  }
}
