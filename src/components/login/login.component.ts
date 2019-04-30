import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username === "andrew66996699" && this.password === "andrew66996699") {
      this.router.navigate(["/listing"]);
    }
  }

}
