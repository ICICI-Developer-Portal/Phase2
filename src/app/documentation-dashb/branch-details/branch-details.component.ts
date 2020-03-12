import { Component, OnInit, TemplateRef, Pipe, ɵConsole } from '@angular/core';
import { LoginService } from 'src/app/services';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  //styleUrls: ['./branch-details.component.css']
})

export class BranchDetailsComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute, private adm: LoginService, private ngxXml2jsonService: NgxXml2jsonService, private modalService: BsModalService, private sanitizer: DomSanitizer) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.NewApplication();
    });
  }

  ngOnInit() {}
  resp: any;
  description: any;
  branchId: any;
  obj: any;
  NewApplication() {
    this.branchId = 2;
    this.adm.api_description(this.branchId)
      .subscribe(
        (data: any) => {
          var response = data._body;
          this.obj = JSON.parse(response);
          this.resp = this.obj[0].TAB_NAME;
          this.description = this.obj[0].DESCRIPTION;
        }
      )
  }
}
