import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services';
import * as CryptoJS from 'crypto-js';  

@Component({
  selector: 'app-jwt-auth',
  templateUrl: './jwt-auth.component.html',
  styleUrls: ['./jwt-auth.component.css']
})
export class JwtAuthComponent implements OnInit {
  plainText:string;  
  encryptText: string;
  encUsername: string;  
  encPassword: string;  
  conversionEncryptOutput: string;  
  conversionDecryptOutput: string;  
  
    
  constructor(
    private adm: LoginService,

  ) { }
loginResponse:any;
  ngOnInit() {}
  Login(username: any, password: any) {
    this.conversionEncryptOutput = CryptoJS.AES.encrypt(username.trim(),password.trim()).toString();  
    alert("encrypt : "+this.conversionEncryptOutput)
    this.conversionDecryptOutput = CryptoJS.AES.decrypt( this.conversionEncryptOutput.trim(), password.trim()).toString(CryptoJS.enc.Utf8);
   alert("decrypt : "+this.conversionDecryptOutput)
    var json = { username: username, password: password };
    this.adm.Login(json).subscribe((data: any) => {
      var response = data._body;
      this.loginResponse = JSON.parse(response);
      if (this.loginResponse.status == true) {
        this.adm.LoginPortal(json).subscribe(
          res => {
            // this.router.navigate(['/index']);
          },
          err => {
            //this.router.navigate(['/index']);
          },
        );
      }
    });
    
    console.log(this.conversionEncryptOutput)
    console.log(username, password);
  }
  
}
