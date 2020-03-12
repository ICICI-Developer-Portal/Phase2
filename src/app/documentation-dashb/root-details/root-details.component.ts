import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-root-details',
  templateUrl: './root-details.component.html',
  // styleUrls: ['./sidenavpages.component.css']
})
export class RootDetailsComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute, private adm: LoginService, private ngxXml2jsonService: NgxXml2jsonService, private modalService: BsModalService, private sanitizer: DomSanitizer) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.NewApp();
    });
  }

  ngOnInit() {}
  tabName: any;
  description: any;
  obj: any;
  rootId: any;
  NewApp() {
    this.rootId = 1;
    this.adm.api_description(this.rootId)
      .subscribe(
        (data: any) => {
          var response = data._body;
          this.obj = JSON.parse(response);
          this.tabName = this.obj[0].TAB_NAME;
          this.description = this.obj[0].DESCRIPTION;
        }
      );
  }
}
