import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  //styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqObj:any;
  faqHeader:any;
  faqObjQues:any=[];
  faqObjAns:any=[];
  faqObjList:any;
  constructor(
    private adm: LoginService,
  ) { }

  ngOnInit() {
    this.adm.faq().subscribe((data:any)=> {
      this.faqObjList = data._body;
      this.faqObjList= this.faqObjList.replace(/\\n/g, "\\\\n")
      this.faqObj = JSON.parse(this.faqObjList)
       for (var i  in this.faqObj){
        this.faqObjQues.push(this.faqObj[i][1])
        this.faqObjAns.push(this.faqObj[i][2])
       this.faqObjAns= this.faqObjAns.map(function(str) {
          return str.replace(/\\n/g, '\n')
        });
        }
    })
  }
}
