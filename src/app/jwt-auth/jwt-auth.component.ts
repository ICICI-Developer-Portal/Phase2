import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jwt-auth',
  templateUrl: './jwt-auth.component.html',
  styleUrls: ['./jwt-auth.component.css'],
})
export class JwtAuthComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  Login(username: any, password: any) {
    console.log(username, password);
  }
}
