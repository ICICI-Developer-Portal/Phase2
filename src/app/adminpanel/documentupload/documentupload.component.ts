import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-documentupload',
  templateUrl: './documentupload.component.html',
  // styleUrls: ['./documentupload.component.css']
})
export class DocumentuploadComponent implements OnInit {
  dataSource: any;
  p : any = "";
  jiraId:any=[];
  sellersPermitFile: any;
  modalRef: BsModalRef;
  confirmMsg:any;
  sellersPermitString: string;
  imageSrc;

  constructor(
    private adm:LoginService,
    private spinnerService: Ng4LoadingSpinnerService,
    private HttpClient: HttpClient,
    private formbuilder: FormBuilder,
    private modalService: BsModalService,) { 
    // this.spinnerService.show();
  }

  ngOnInit() {
    this.request_data();
  }
  request_data() {
   this.spinnerService.show();
  this.adm.Onboardrequestsuser().subscribe((data: any) => {
    var response = data._body;

    var obj = JSON.parse(response);
    this.dataSource = obj;
    for(var i=0; i<=this.dataSource.length; i++){
      this.jiraId.push(this.dataSource[i].JiraId);
      console.log("abc",this.jiraId)
    }
    console.log("obj",obj)
    this.spinnerService.hide();
  });

}
public picked(event) {
  //this.currentId = field;
  let fileList: FileList = event.target.files;
  if (fileList.length > 0) {
    const file: File = fileList[0];
    this.sellersPermitFile = file;
    this.handleInputChange(file);
  }
}
handleInputChange(files) {
  var file = files;
  //var pattern = /image-*/;
  var reader = new FileReader();
  // if (!file.type.match(pattern)) {
  //   this.toastrmsg('error', "Invalid Format.");
  //   return;
  // }
  reader.onloadend = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
}

_handleReaderLoaded(e) {
  let reader = e.target;
  var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
  this.imageSrc = base64result;
  localStorage.setItem('Imagepath', this.imageSrc);
}
btnConfirm(UATconfirm) {
  const formData = new FormData();
  let a: any = (<HTMLInputElement>document.getElementById('file1')).files;
    console.log('a', a);
    for (let k = 0; k < a.length; k++) {
      formData.append('file1', a[k]);
    }
this.HttpClient.post<any>(
  'https://developerapi.icicibank.com:8443/api/v2/jira',
  formData,
).subscribe(
  res => {
    console.log(res);
    if (res.success === 'true') {
      //File upload service
      var formData = new FormData();
      let b: any = (<HTMLInputElement>document.getElementById('file1'))
        .files;
      for (let k = 0; k < b.length; k++) {
        formData.append(res.jiraId, b[k]);
      }
      this.HttpClient.post<any>(
        'https://developer.icicibank.com/fileUpload',
        formData,
      ).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('err', err);
          console.log('err headers', err.headers);
        },
      );
    }
    this.modalRef = this.modalService.show(UATconfirm, {
      backdrop: 'static',
    });
    this.confirmMsg = res['message'];
    this.confirmMsg = this.confirmMsg.substring(51, 44);
    //this.toastrmsg('success', res['message']);
    // this.modalRef.hide();
  },
  err => {
    console.log('zze', err);
    console.log('zzz', err.headers);
  },
);
}
}