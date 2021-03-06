import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentdownload',
  templateUrl: './documentdownload.component.html',
  // styleUrls: ['./documentdownload.component.css']
})
export class DocumentdownloadComponent implements OnInit {
  dataSource: any;
  p: any = '';
  role: string;
  searchText;
  filter : any = "";
  certificate: any;
  public settings = {};
  constructor(
    private adm: LoginService,
    private spinnerService: Ng4LoadingSpinnerService,
    private router: Router,
  ) {
    this.request_data();
  }

  ngOnInit() {}
  request_data() {
    this.spinnerService.show();
    this.adm.Onboardrequestsuser().subscribe((data: any) => {
      var response = data._body;
      var obj = JSON.parse(response);
      this.dataSource = obj;
      this.spinnerService.hide();
    },
    err => {
      // this.router.navigate(['error'])
      console.log('err', err);
      this.router.navigate(['error']);
    },
    );
  }

  //supporting .crt,.zip,pdf,.txt,png,jpeg,jpg,pem,xlsx,.cer
  downloadCertificate(url) {
    var json = {
      filePath: url,
    };
    var fileName = url.substring(url.lastIndexOf('/') + 1);
    var fileType = url.substring(url.lastIndexOf('.') + 1);
    this.adm.downloadCertificate(json).subscribe((data: any) => {
      this.certificate = data._body;
      console.log(data._body);
      if(fileType === "pdf"){
        alert("pdf")
      var blob = new Blob([this.certificate], {
        type: "application/pdf"
      });
      saveAs(blob, fileName);
    }
    if(fileType === "cer" || fileType === "crt" || fileType ==="txt" || fileType === "pem"){
      if(fileType === "cer"){
      alert("cer")
      }
      if(fileType === "crt"){
        alert("crt")
        }
        if(fileType === "txt"){
          alert("txt")
          }
      var blob = new Blob([this.certificate], {
        type: 'text/plain',
      });
      saveAs(blob, fileName);
    }
    if(fileType === "png"){
      if(fileType === "png"){
        alert("png")
        }
      var blob = new Blob([this.certificate], {
        type: 'image/png',
      });
      saveAs(blob, fileName);
    }
    if(fileType === "jpeg" || fileType === "jpg"){
      if(fileType === "jpeg"){
        alert("jpeg")
        }
      var blob = new Blob([this.certificate], {
        type: 'image/jpeg',
      });
      saveAs(blob, fileName);
    }
    if(fileType === "xlsx"){
      if(fileType === "xlsx"){
        alert("xlsx")
        }
      var blob = new Blob([this.certificate], {
        type: ' application/vnd.ms-excel',
      });
      saveAs(blob, fileName);
    }
    if(fileType === "xlsx"){
      if(fileType === "xlsx"){
        alert("xlsx")
        }
      var blob = new Blob([this.certificate], {
        type: ' application/vnd.ms-excel',
      });
      saveAs(blob, fileName);
    }
    if(fileType === "zip"){
      if(fileType === "zip"){
        alert("zip")
        }
      var blob = new Blob([this.certificate], {
        type: 'application/zip',
      });
      saveAs(blob, fileName);
    }
    },
    err => {
      console.log('err', err);
      this.router.navigate(['error']);
    },
    );
  }
}