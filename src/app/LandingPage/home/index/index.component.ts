import { Component, OnInit, TemplateRef, ɵConsole } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ToasterService, Toast } from 'angular2-toaster';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services';
import { PasswordValidation } from '../../layout/header/password.validator';
import { VariablesService } from 'src/app/services/Variables.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var showProdTabEnv: any; // just change here from arun answer.
declare var openProdCurrentTabEnv: any;
import { formatDate } from '@angular/common';
import { CONSTANTS } from 'config/application-constant';
import { PATTERNS } from 'config/regex-pattern';
import { DashboardService } from 'src/app/services/dashboard.service';
import { DomSanitizer } from '@angular/platform-browser';
import { analyzeAndValidateNgModules } from '@angular/compiler';
declare var $: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  //styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  treeDataKeys: any;
  responseData: any;
  menuArray: any[];
  tDataKeys: any[];
  treeArr: any[];
  treeItems: any;
  nodeId: any;
  nodeType: any;
  levels: any;
  treeData = [];
  treeData1: any[];
  itemArr:any =[];
  IP_Pattern =
    '^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.' +
    '([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.' +
    '([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.' +
    '([01]?\\d\\d?|2[0-4]\\d|25[0-5])$';
  Callback_URL = 'https?://.+';
  isemail_reg_check: string = '';
  ismobile_reg_check: string = '';
  isotp_reg_check: string = '';

  Cms_allShow: Boolean = false;
  Webservice_Show: Boolean = false;
  Ecollection_Show: Boolean = false;
  showTab = 1;
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;
  modalRef4: BsModalRef;
  modalRef5: BsModalRef;
  modalRef6: BsModalRef;
  modalRef7: BsModalRef;
  modalRef8: BsModalRef;

  valueWidth = false;
  show: boolean = false;
  showdocs: boolean = false;
  showOtp: boolean = true;
  signupForm: FormGroup;
  isSubmitted: boolean;
  signupForm2: FormGroup;
  signupForm3: FormGroup;
  signupForm4: FormGroup;
  frmUATFirst: FormGroup;
  frmUATSecond: FormGroup;
  frmUATThird: FormGroup;
  forgetpassForm: FormGroup;
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  logged_in: Boolean = false;
  hideSignupbtn1: Boolean = false;
  isusername: boolean = false;
  issetpwd: boolean = false;
  is_res_error: boolean = false;

  isemail_check: boolean = false;
  shfrmSFFirst: boolean = false;
  shfrmSFSecond: boolean = false;
  shfrmSFThird: boolean = false;

  domainLst = [];
  subdomainlst = [];
  objOnB: any;
  drpHide: boolean;
  shfrmUATFirst: boolean = false;
  shfrmUATSecond: boolean = false;
  shfrmUATThird: boolean = false;

  shfrmProdFirst: boolean = false;
  shfrmProdSecond: boolean = false;
  shfrmProdThird: boolean = false;

  imageSrc;
  sellersPermitFile: any;
  sellersPermitString: string;

  frmUAT_A1: boolean = false;
  frmUAT_A2: boolean = false;
  frmUAT_A3: boolean = false;

  frmProd_A1: boolean = false;
  frmProd_A2: boolean = false;
  frmProd_A3: boolean = false;

  feedback_email_address: any;
  feedback_location_name: any;
  issues: any = '';
  //Suggestion:any ="";
  feedback_email_test: any;
  itemList = [];
  selectedItems = [];
  settings = {};
  otp_verified = 0;

  list: any = [];

  edit_data: any;
  otp_txt_id: any = '';
  confirmMsg: any;
  confirmMsgProd: any;
  JiraId: any;
  JiraIdnew: any;
  active: string;
  collection: any;

  accountNumErrorMsg: string = '';
  ipAddressErrorMsg: string = '';
  portNumErrorMsg: string = '';
  urlErrorMsg: string = '';
  companyNamesDetails: any;
  companyNames: any;
  idArr: any = [];
  additionalParams: any;
  accNo: boolean = false;
  clientCode: boolean = false;
  url: boolean = false;
  ip: boolean = false;
  port: boolean = false;
  checksum: boolean = false;
  encryption: boolean = false;
  certificate: boolean = false;
  service: boolean = false;
  commModel: boolean = false;
  ifsc: boolean = false;
  virtualCode: boolean = false;
  ips: boolean = false;
  interAccNo: boolean = false;
  accName: boolean = false;
  authLevel: boolean = false;
  urn: boolean = false;
  env: boolean = false;
  valid: boolean = false;
  accept: boolean = false;
  recipient: boolean = false;
  mode: boolean = false;
  trans: boolean = false;
  amount: boolean = false;
  internalArr:any=[];
  treeElements: any;
  showMatSpinner: boolean = false;
  selectednode:any =[];
  interval:any;
  constructor(
    private HttpClient: HttpClient,
    private formbuilder: FormBuilder,
    private objOnBoarding: VariablesService,
    private spinnerService: Ng4LoadingSpinnerService,
    private modalService: BsModalService,
    private router: Router,
    private adm: LoginService,
    private toasterService: ToasterService,
    private dashboardService: DashboardService,
  ) {
    this.objOnB = this.objOnBoarding.getonBoarding();
    this.Hide_signbtn();

    sessionStorage.setItem('1105', 'false');
    sessionStorage.setItem('1106', 'false');
    sessionStorage.setItem('1107', 'false');
    this.adm.getUserId().subscribe(data => {
      this.logged_in =
        data != '' && data != null && data != undefined ? true : false;
    });
   this.interval= setInterval(()=>{     
      this.assignClickToNodes();
    },1000)
  }

  ngOnInit() {
    var self = this;
    //api for get menu tree data
    this.getMenuTree();
    localStorage.removeItem('checkedid');

    //api for get tree data
    this.dashboardService.getTreeData().subscribe((data: any) => {
      this.responseData = JSON.parse(data._body);
      this.menuArray = this.getMenuData(this.responseData);
    });
    this.settings = {
      singleSelection: false,
      text: 'Select Fields',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
      badgeShowLimit: 5,
      groupBy: 'category',
    };
    this.logged_in = this.adm.check_log();
    this.forgetpassForm = this.formbuilder.group({
      username: ['', [Validators.required]],
    });
    this.signupForm = this.formbuilder.group({
      firstname: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      domainNm: ['', [Validators.required]],
      CITY: [''],
      RM: [''],
      email: ['', [Validators.required, Validators.email]],
      otp_verified: ['0'],
      otp_send: ['0'],
    });

    this.signupForm2 = this.formbuilder.group({
      mobile_no: [
        '',
        [Validators.required, Validators.pattern(this.mobnumPattern)],
      ],
      otp_code: ['', [Validators.required]],
    });

    this.signupForm3 = this.formbuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        term: ['', [Validators.required]],
      },
      {
        validator: PasswordValidation.MatchPassword, // your validation method
      },
    );

    this.signupForm4 = this.formbuilder.group({
      termsandcondition: ['', [Validators.required]],
    });

    this.shfrmSFFirst = true;
    this.shfrmSFSecond = false;
    this.shfrmSFThird = false;

    this.shfrmUATFirst = true;
    this.shfrmUATThird = false;
    this.shfrmUATSecond = false;
    this.frmUAT_A1 = true;
    this.frmUAT_A2 = true;
    this.frmUAT_A3 = true;

    this.frmProd_A1 = true;
    this.frmProd_A2 = true;
    this.frmProd_A3 = true;

    this.get_domain_and_apis();
    this.onCheckTree();
  }
    assignClickToNodes() {
    var self = this;
    //$('.sideMenu>.nav-pills li.nav-link').unbind('click');

    $('.sideMenu>.nav-pills li.nav-link').click(function() {
      $(this)
        .siblings('.active')
        .removeClass('active');
      $(this).addClass('active');
    });

    $('.sideMenu>.nav-pills>li.nav-link a').click(function() {
      $(this)
        .parent()
        .siblings('.openDropdown')
        .removeClass('openDropdown');
      $(this)
        .parent()
        .toggleClass('openDropdown');
    });

    $('.sideMenu .openDropdown.active').click(function() {
      $(this).toggleClass('openDropdown');
    });

    $('.sideMenu .nav-pills-first-level>li.nav-link').click(function() {
      $(this)
        .siblings('.active')
        .removeClass('active');
      $(this).addClass('active');
    });

    $('.sideMenu .nav-pills-first-level>li.nav-link a').click(function() {
      $(this).removeClass('active show');
    });

    $('.sideMenu .nav-pills-second-level>li.nav-link').click(function() {
      $(this).toggleClass('openDropdown');
      $(this).addClass('active');
      $(this)
        .siblings('.openDropdown')
        .removeClass('openDropdown active');
    });

    $('.sideMenu .nav-pills-second-level>li.nav-link a').click(function() {
      $(this).removeClass('active show');
    });
   
  //   $('.checkall').off().on('change', function() {
  //      var select_all = $(this).find("input");
  //      console.log("select_all",select_all)
  //     if(select_all.is(':checked')){
  //         $(':checkbox').each(function() {
  //           this.checked = true;    
  //           this.selectednode = $(this).attr('role');
  //              console.log("api id1", this.selectednode)
  //               self.Appnode(this.selectednode,this.checked)
  //             console.log("allselect", this.idArr)                   
  //         });
  //     } else {
  //       console.log("uncheck all", select_all.is(':checked'))
  //         $(':checkbox').each(function() {
  //             this.checked = false;                       
  //         });
  //     }
  // });
    //for dynamic data click event handle
    $(document)
      .off('click')
      .on('click', '.tree-node', function(e) {
       $(".containercb").append ( `<input type="checkbox" class="check"/>` +`<span class="checkmark">`+`</span>`);
        var selectedId = $(this).attr('role');
        this.nodeId = selectedId.split('_').pop();
         var nodeType = selectedId.split('_', 2).pop();
      }) 
      $('.containercb').off().on('change', function() {
        var rbtn = $(this).find("input");
          if(rbtn.is(':checked')){
              this.selectednode = $(this).attr('role');
               console.log("api id", this.selectednode)
               this.checked =true;
               self.Appnode(this.selectednode,this.checked)
           }
           else {
             if(this.selectednode!=undefined){
               this.checked=false;
               self.Appnode(this.selectednode,this.checked)
             }
           }
       })      
  }
  getMenuTree() {
    this.dashboardService.getMenuTreeData().subscribe((data: any) => {
      this.treeData = JSON.parse(data._body);
      this.createTreeAndJquery();
    });
  }

  /** create tree and jquery for menu tree expand/collapse
   * @class SidebarComponent
   * @method createTreeAndJquery
   */

  createTreeAndJquery() {
    this.treeElements = this.createTree();
    console.log(this.treeElements)
    // setInterval(() => {
    //   this.assignClickToNodes();
    // }, 1000);
  }

/** Fetch tree dynamically
   * @class IndexComponent
   * @method createTree
   */
   createTree() {
    this.treeItems =
    ` <li class="nav-link">` +
      `<ul class="collapse nav-pills-first-level submenuLevelOneUat list-unstyled">` +
      `<li class="nav-link">` +
      `<a id="v-pills-List-Customer-Accounts-tab" class="tree-node" role="tab_api_1" data-toggle="pill" aria-selected="false" >Encryption` +
      `</a>` +
      `</li>` +
      `<li class="nav-link">` +
      `<a id="v-pills-List-Customer-Accounts-tab" class="tree-node" role="tab_api_2" data-toggle="pill" aria-selected="false" >Test API` +
      `</a>` +
      `</li>` +
      `<li class="nav-link">` +
      `<a id="v-pills-List-Customer-Accounts-tab" class="tree-node" role="tab_api_3" data-toggle="pill"  aria-selected="false" >` +
      `Decryption` +
      `</a>` +
      `</li>` +
      `</ul>` +
      `</li>`;
    for (var i = 0; i < this.treeData.length; i++) {
      if (this.treeData[i].CHILD_COUNT !== '0') {
        this.treeItems +=
          `<li class="nav-link">` +
          `<a id="v-pills-messages-tab" class="tree-node" data-toggle="pill"  role="tab_${this.treeData[i].TYPE}_${this.treeData[i].TREE_ID}" aria-controls="v-pills-home" aria-selected="true">` +
          `${this.treeData[i].TAB_NAME}` +
          `<img class="dropdownIcon" src="assets/images/dropdown-2.svg" alt=""/>` +
          `</a>`;

        if (this.treeData[i].CHILD_COUNT !== '0') {
           this.createUnorderedList(
            this.treeData[i].children,
            this.treeData[i].TYPE,
            this.treeData[i].LEVEL,
          );
        }
      } else {
        this.treeItems +=
          `<li class="nav-link">` +
          `<a id="v-pills-messages-tab" class="tree-node" data-toggle="pill" role="tab_${this.treeData[i].TYPE}_${this.treeData[i].API_ID}" aria-controls="v-pills-home" aria-selected="true">` +
          `${this.treeData[i].TAB_NAME}` +
          `</a>`;
      }

      this.treeItems = this.treeItems + `</li>`;
    }
    //  this.assignClickToNodes();
    return this.treeItems;
  }
  /** Fetch tree sub nodes dynamically
   * @class IndexComponent
   * @method createUnorderedList
   */
   createUnorderedList(childrenArr, nodeType, level) {
    if (level === '1') {
      this.treeItems += `<ul
      class="collapse nav-pills-first-level submenuLevelOneUat list-unstyled"
    >`;
    }
    if (level === '2') {
      this.treeItems += `<ul
      class="collapse nav-pills-first-level submenuLevelTwoUat list-unstyled"
    >`;
    }
    if (level >= '3') {
      this.treeItems += `<ul
      class="collapse nav-pills-third-level submenuLevelThreeUat list-unstyled"
    >`;
    }
    for (var i = 0; i < childrenArr.length; i++) {
      if (childrenArr[i].CHILD_COUNT !== '0') {
        this.treeItems +=
          `<li class="nav-link">` +
          `<a id="v-pills-messages-tab" class="tree-node" data-toggle="pill" role="tab_${childrenArr[i].TYPE}_${childrenArr[i].TREE_ID}" aria-controls="v-pills-home" aria-selected="true">` +
          `${childrenArr[i].TAB_NAME}` +
          `<img class="dropdownIcon" src="assets/images/dropdown-2.svg" alt="" />` +
          `</a>`;

        this.createUnorderedList(
          childrenArr[i].children,
          childrenArr[i].TYPE,
          childrenArr[i].LEVEL,
        );
      } else {   
        this.treeItems +=
          `<li class="nav-link">` + `<label class="checkboxContainer"><div class="containercb" role="${childrenArr[i].API_ID}"></div>`+
          `<a id="v-pills-messages-tab" class="tree-node" data-toggle="pill" role="tab_${childrenArr[i].TYPE}_${childrenArr[i].API_ID}" aria-controls="v-pills-home" aria-selected="true">` +
          `${childrenArr[i].TAB_NAME}` + 
          `</a>` +
          `</label>`;
      }
      this.treeItems += `</li>`;
    }
    this.treeItems += `</ul>`;
  }
  /** get menu data
   * @class SidebarComponent
   * @method getMenuData
   */
  getMenuData(data): Array<object> {
    let tempArray = [];
    Object.keys(data).forEach(async (eachKey, index) => {
      let tempObj = { menuName: eachKey, menuOrder: index };
      if (typeof data[eachKey] == 'object' && !data[eachKey].API_ID) {
        //parent node
        tempObj['children'] = this.getMenuData(data[eachKey]);
      } else if (typeof data[eachKey] == 'object' && data[eachKey].API_ID) {
        //child
        tempObj['API_ID'] = data[eachKey].API_ID;
      }
      tempArray.push(tempObj);
    });

    tempArray = tempArray.sort((a, b) =>
      a.menuOrder > b.menuOrder ? 1 : b.menuOrder > a.menuOrder ? -1 : 0,
    );
    return tempArray;
  }
  /** To push checked id array
   * @class IndexComponent
   * @method Appnode
   */
Appnode(num:any, checked:any){
  var index = this.internalArr.indexOf(num)
  if(index === -1 && checked){
     this.internalArr.push(num);
     localStorage.setItem("checkedid",this.internalArr)
       console.log("idarray",this.internalArr)
  }
  else{
    this.internalArr.splice(index, 1);
    console.log("id array uncheck", this.internalArr)
  }
}
  /** For scroll view
   * @class SidebarComponent
   * @method scroll_view
   */
  scroll_view(id) {
    this.router.navigate(['index']);
    setTimeout(function() {
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }

  get firstname() {
    return this.signupForm.get('firstname');
  }
  get companyName() {
    return this.signupForm.get('companyName');
  }
  get domainNm() {
    return this.signupForm.get('domainNm');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get CITY() {
    return this.signupForm.get('CITY');
  }
  get RM() {
    return this.signupForm.get('RM');
  }

  get mobile_no() {
    return this.signupForm2.get('mobile_no');
  }
  get otp_code() {
    return this.signupForm2.get('otp_code');
  }

  get username() {
    return this.signupForm3.get('username');
  }
  get password() {
    return this.signupForm3.get('password');
  }
  get confirmPassword() {
    return this.signupForm3.get('confirmPassword');
  }

  get termsandcondition() {
    return this.signupForm2.get('termsandcondition');
  }

  get username1() {
    return this.forgetpassForm.get('username1');
  }

  toastrmsg(type, title) {
    var toast: Toast = {
      type: type,
      title: title,
      showCloseButton: true,
    };
    this.toasterService.pop(toast);
  }

  UAT_help(UAT_Help: any) {
    this.modalRef = this.modalService.show(UAT_Help, {
      backdrop: 'static',
      class: 'modal-lg',
    });
  }

  openModal2(signup: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(signup, { backdrop: 'static' });
    try {
      this.modalRef.hide();
    } catch (e) {}
    this.shfrmSFFirst = true;
    this.shfrmSFSecond = false;
    this.shfrmSFThird = false;
  }
  already_Log(alreadylogin: any, signup: any) {
    if (localStorage.getItem('id') != null) {
      this.modalRef7 = this.modalService.show(alreadylogin, {
        backdrop: 'static',
      });
    } else {
      this.modalRef2 = this.modalService.show(signup, { backdrop: 'static' });
    }
  }

  openModal(signin: TemplateRef<any>) {
    this.modalRef = this.modalService.show(signin, { backdrop: 'static' });
    try {
      this.modalRef2.hide();
    } catch (e) {}
  }
  Modalforgotpassw(forgotpassw: TemplateRef<any>) {
    this.modalRef3 = this.modalService.show(forgotpassw, {
      backdrop: 'static',
    });
    try {
      this.modalRef.hide();
    } catch (e) {}
  }
  already_login(alreadylogin: TemplateRef<any>) {
    this.modalRef7 = this.modalService.show(alreadylogin, {
      backdrop: 'static',
    });
  }

  Login(username: any, password: any) {
    this.isusername = false;
    this.issetpwd = false;
    this.is_res_error = false;
    if (username == '') {
      this.isusername = true;
      return;
    } else if (password == '') {
      this.isusername = false;
      this.issetpwd = true;
      return;
    }
    var json = { username: username, password: password };
    this.spinnerService.show();
    this.adm.Login(json).subscribe((data: any) => {
      var response = data._body;
      var obj = JSON.parse(response);
      if (obj.status == true) {
        this.Hide_signbtn();
        this.show = false;
        this.modalRef.hide();
        localStorage.setItem('id', obj.data.id);
        localStorage.setItem('email', obj.data.email);
        localStorage.setItem('username', obj.data.username);
        localStorage.setItem('password', obj.data.password);
        localStorage.setItem('role', 'user');
        this.adm.sendUserId(obj.data.id);
        this.adm.LoginPortal(json).subscribe(
          res => {
            this.router.navigate(['/index']);
          },
          err => {
            this.router.navigate(['/index']);
          },
        );
        this.spinnerService.hide();
      } else {
        this.spinnerService.hide();
        this.isusername = false;
        this.issetpwd = false;
        this.is_res_error = obj.message;
      }
    });
  }

  today = new Date();
  //  Signup function
  sign_up() {
    var CurrentTime = formatDate(
      this.today,
      'dd-MM-yyyy hh:mm:ss a',
      'en-US',
      '+0530',
    );
    //var CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
    try {
      var json = {
        username: this.signupForm3.value.username,
        password: this.signupForm3.value.password,
        email: this.signupForm.value.email,
        firstname: this.signupForm.value.firstname,
        lastName: this.signupForm.value.firstname,
        domainNm: this.signupForm.value.domainNm,
        companyName: this.signupForm.value.companyName,
        contactNo: this.signupForm2.value.mobile_no,
        CITY: this.signupForm.value.CITY,
        RM: this.signupForm.value.RM,
        tncConfirmed: '1',
        tncConfirmedDt: CurrentTime,
        approverName: 'YES',
        approverEmailId: 'YES',
        requestDt: CurrentTime,
      };
      this.spinnerService.show();
      this.adm.sign_up(json).subscribe((data: any) => {
        var response = data._body;
        var obj = JSON.parse(response);
        if (obj.status == true) {
          this.signup_jira();
          this.toastrmsg(
            'success',
            'Thanks for registering, once your application is approved it would be conveyed to you on mail sign up.',
          );
          this.spinnerService.hide();
          this.signupForm.reset();
          this.signupForm2.reset();
          this.signupForm3.reset();
          this.signupForm4.reset();
          this.modalRef2.hide();
          this.shfrmSFFirst = true;
          this.shfrmSFSecond = false;
          this.shfrmSFThird = false;
          this.router.navigate(['/index']);
        } else {
          this.shfrmSFThird = true;
          this.shfrmSFSecond = false;
          this.shfrmSFFirst = false;
          this.spinnerService.hide();
          this.toastrmsg('error', obj.message);
        }
      });
    } catch {
      this.toastrmsg('error', console.error());
    }
  }

  signup_jira() {
    var CurrentTime = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
    var json = {
      userName: this.signupForm3.value.username,
      email: this.signupForm.value.email,
      firstName: this.signupForm.value.firstname,
      lastName: this.signupForm.value.firstname,
      domainNm: this.signupForm.value.domainNm,
      companyName: this.signupForm.value.companyName,
      contactNo: this.signupForm2.value.mobile_no,
      CITY: this.signupForm.value.CITY,
      RM: this.signupForm.value.RM,
      tncConfirmed: '1',
      tncConfirmedDt: CurrentTime,
      approverName: 'YES',
      approverEmailId: 'YES',
      requestDt: CurrentTime,
    };
    this.adm.sign_upjira(json).subscribe((data: any) => {
      var response = data._body;
    });
  }

  SendOtp(mobile: any) {
    this.signupForm.controls['otp_send'].setValue('0');
    try {
      if (mobile == '') {
        this.ismobile_reg_check = 'Enter Mobile Number';
        return;
      }
      var json = {
        mobile_no: mobile,
      };
      this.ismobile_reg_check = '';
      this.adm.SendOTP(json).subscribe((data: any) => {
        var response = data._body;
        var obj = JSON.parse(response);
        if (obj.status == true) {
          this.showOtp = true;
          this.show = true;
          this.otp_txt_id = obj.data;
          this.signupForm.controls['otp_send'].setValue('1');
        } else {
          this.signupForm.controls['otp_send'].setValue('0');
          this.showOtp = true;
          this.show = true;
        }
      });
    } catch {}
  }

  SendEmailOtp() {
    try {
      this.adm.SendEmailOTP(this.signupForm.value).subscribe((data: any) => {
        var response = data._body;
        var obj = JSON.parse(response);
        if (obj.status == true) {
          this.show = true;
          //this.toastrmsg('success', "Send Email Otp");
          this.toastrmsg('success', 'Please check your email and verified');
        } else {
          this.toastrmsg('error', 'some thing went wrong');
        }
      });
    } catch {}
  }
  email_validate(searchValue: string): void {}
  verifyOtp1() {
    try {
      this.adm
        .verify_otp(this.signupForm2.value, this.otp_txt_id)
        .subscribe((data: any) => {
          var response = data._body;
          var obj = JSON.parse(response);
          if (obj.status == true) {
            this.shfrmSFThird = true;
            this.shfrmSFFirst = false;
            this.shfrmSFSecond = false;
            this.otp_verified = 1;
            this.signupForm.controls['otp_verified'].setValue('1');
            this.isotp_reg_check = '';
          } else {
            this.shfrmSFSecond = true;
            this.shfrmSFThird = false;
            this.shfrmSFFirst = false;
            this.otp_verified = 0;
            this.signupForm.controls['otp_verified'].setValue('0');
            this.isotp_reg_check = 'Otp not verified';
          }
        });
    } catch {}
  }

  // new signup form function
  save1() {
    this.shfrmSFSecond = true;
    this.shfrmSFFirst = false;
    this.shfrmSFThird = false;
  }

  save2() {
    this.verifyOtp1();
  }

  // End region

  Documentation() {
    if (localStorage.getItem('id') != null) {
      this.router.navigate(['/dashboard']);
      this.showdocs = true;
    } else {
      this.router.navigate(['/index']);
    }
  }

  HowItWork(modal_hwi: any) {
    this.modalRef = this.modalService.show(modal_hwi, {
      backdrop: 'static',
      class: 'modal-lg',
    });
  }

  browse_api(signin: any) {
    if (localStorage.getItem('id') != null) {
      this.router.navigate(['/documentation']);
    } else {
      this.modalRef = this.modalService.show(signin, { backdrop: 'static' });
    }
  }
  // forget Password function
  forgot(username: any, forgotpasswreset: TemplateRef<any>) {
    if (username == '') {
      this.toastrmsg('error', 'Enter Username');
      return;
    }
    var json = { username: username };
    this.spinnerService.show();
    this.adm.forgetPassw(json).subscribe((data: any) => {
      var response = data._body;
      var obj = JSON.parse(response);
      if (obj.status == true) {
        this.modalRef8 = this.modalService.show(forgotpasswreset, {
          backdrop: 'static',
        });
        // this.toastrmsg('success', ' Please check your mail');
        this.router.navigate(['/index']);
        this.modalRef3.hide();
        this.spinnerService.hide();
      } else {
        this.toastrmsg('error', obj.message);
      }
    });
  }

  OnCheckEmail(Exists_Email: any) {
    try {
      var json = { email: Exists_Email };
      this.adm.Exists_Email(json).subscribe((data: any) => {
        var response = data._body;
        var obj = JSON.parse(response);
        if (obj.status == true) {
          this.isemail_check = true;
        } else {
          this.isemail_check = false;
          this.isemail_reg_check = obj.message;
        }
      });
    } catch {}
  }

  OnCheckUsername(username: any) {
    try {
      var json = { username: username };
      this.adm.Exists_Username(json).subscribe((data: any) => {
        var response = data._body;
        var obj = JSON.parse(response);
        if (obj.status == true) {
          //this.toastrmsg('error', "Username already Exist");
        } else {
          this.toastrmsg('error', 'Username already Exist');
        }
      });
    } catch {}

    //alert(Email);
  }

  show_build(signin: any) {
    if (localStorage.getItem('id') != null) {
      this.router.navigate(['/buildingblock']);
    } else {
      this.modalRef = this.modalService.show(signin, { backdrop: 'static' });
    }
  }

  loans(signin: any) {
    if (localStorage.getItem('id') != null) {
      this.router.navigate(['/loanandcard']);
    } else {
      this.modalRef = this.modalService.show(signin, { backdrop: 'static' });
    }
  }

  account(signin: any) {
    if (localStorage.getItem('id') != null) {
      this.router.navigate(['/accountdeposit']);
    } else {
      this.browse_api(signin);
    }
  }

  payment(signin: any) {
    if (localStorage.getItem('id') != null) {
      this.router.navigate(['/payment']);
    } else {
      this.browse_api(signin);
    }
  }

  corporate(signin: any) {
    if (localStorage.getItem('id') != null) {
      this.router.navigate(['/corporatebank']);
    } else {
      this.browse_api(signin);
    }
  }

  commercial(signin: any) {
    if (localStorage.getItem('id') != null) {
      this.router.navigate(['/commercialbank']);
    } else {
      this.browse_api(signin);
    }
  }

  Hide_signbtn() {
    if (!localStorage.getItem('id')) {
      this.hideSignupbtn1 = true;
    } else {
      this.hideSignupbtn1 = false;
    }
  }

  get_domain_and_apis() {
    this.adm.domain_and_apis().subscribe((data: any) => {
      var obj = JSON.parse(data._body);
      var domain = [];
      for (var i in obj) {
        domain.push(obj[i].domain);
      }
      this.domainLst = domain;
    });
  }

  callSubdomain(value) {
    console.log('doamin name', value);

    if (value != '') {
      this.adm.domain_and_apis().subscribe((data: any) => {
        console.log('get treedata', data);
        var obj = JSON.parse(data._body);
        console.log('obj', obj);
        var subdomain = [];
        for (var i in obj) {
          if (obj[i].domain == value) {
            for (var j in obj[i].sub_domain) {
              subdomain.push(obj[i].sub_domain[j]);
            }
          }
        }
        this.drpHide = true;
        let dt = [];

        this.subdomainlst = subdomain;
        console.log(this.subdomainlst);
        for (let j in this.subdomainlst) {
          let d = this.subdomainlst[j];
          console.log('d', d);
          for (let k in d['api']) {
            dt.push({
              id: d['api'][k]['ApiId'],
              itemName: d['api'][k]['name'],
              category: d['name'],
            });
          }
        }
        this.objOnB.txtSubDomain = [];
        // this.edit_data.txtSubDomain = [];
        this.itemList = dt;
        console.log(this.itemList);
      });
    } else {
      this.drpHide = false;
      this.toastrmsg('error', 'Please select correct domain type.');
    }
  }
  onCheckTree(){
    // this.dashboardService.getMenuTreeData().subscribe((data: any) => {
    //   this.itemList = JSON.parse(data._body);
    //   console.log("itemlist",this.itemList)
      
    //   for(let i=0; i < this.itemList.length;i++){
    //     if (this.itemList[i].CHILD_COUNT !== '0') {
    //       this.itemArr.push(this.itemList[i].TAB_NAME);
    // console.log("hii", this.itemArr)

          // this.itemList +=
          //   `<li class="nav-link">` +
          //   `<a id="v-pills-messages-tab" class="tree-node" data-toggle="pill"  role="tab_${this.treeData[i].TYPE}_${this.treeData[i].TREE_ID}" aria-controls="v-pills-home" aria-selected="true">` +
          //   `${this.itemList[i].TAB_NAME}` +
          //   `<img class="dropdownIcon" src="assets/images/dropdown-2.svg" alt=""/>` +
          //   `</a>`;
  
          // if (this.itemList[i].CHILD_COUNT !== '0') {
          //   this.createUnorderedList(
          //     this.itemList[i].children,
          //     this.itemList[i].TYPE,
          //     this.itemList[i].LEVEL,
          //   );
          // }
        // } else {
        //   this.itemList +=
        //     `<li class="nav-link">` +
        //     `<a id="v-pills-messages-tab" class="tree-node" data-toggle="pill" role="tab_${this.treeData[i].TYPE}_${this.treeData[i].API_ID}" aria-controls="v-pills-home" aria-selected="true">` +
        //     `${this.itemList[i].TAB_NAME}` +
        //     `</a>` +
        //     `</span>`;
        // }
  
        // this.itemList = this.itemList + `</li>`;
      // }
    // }
    // });
  }
  /** Create menu tree sub nodes dynamically
   * @class SidebarComponent
   * @method createUnorderedList
   */
  // createUnorderedList(childrenArr, nodeType, level) {
  //   if (level === '1') {
  //     this.itemList += `<ul
  //     class="collapse nav-pills-first-level submenuLevelOne list-unstyled"
  //   >`;
  //   }
  //   if (level === '2') {
  //     this.itemList += `<ul
  //     class="collapse nav-pills-first-level submenuLevelTwo list-unstyled"
  //   >`;
  //   }
  //   if (level >= '3') {
  //     this.itemList += `<ul
  //     class="collapse nav-pills-first-level submenuLevelThree list-unstyled"
  //   >`;
  //   }

  //   for (var i = 0; i < childrenArr.length; i++) {
  //     if (childrenArr[i].CHILD_COUNT !== '0') {
  //       this.itemList +=
  //         `<li class="nav-link">` +
  //         `<a id="v-pills-messages-tab" class="tree-node" data-toggle="pill" role="tab_${childrenArr[i].TYPE}_${childrenArr[i].TREE_ID}" aria-controls="v-pills-home" aria-selected="true">` +
  //         `${childrenArr[i].TAB_NAME}` +
  //         `<img class="dropdownIcon" src="assets/images/dropdown-2.svg" alt="" />` +
  //         `</a>`;

  //       this.createUnorderedList(
  //         childrenArr[i].children,
  //         childrenArr[i].TYPE,
  //         childrenArr[i].LEVEL,
  //       );
  //     } else {
  //       this.itemList +=
  //         `<li class="nav-link">` +
  //         `<a id="v-pills-messages-tab" class="tree-node" data-toggle="pill" role="tab_${childrenArr[i].TYPE}_${childrenArr[i].API_ID}" aria-controls="v-pills-home" aria-selected="true">` +
  //         `${childrenArr[i].TAB_NAME}` +
  //         `</a>`;
  //     }

  //     this.itemList += `</li>`;
  //   }
  //   this.itemList += `</ul>`;
  // }
  onItemSelect(item: any) {
    if (item.id) {
      this.idArr.push(item.id);
      console.log('hi', this.idArr);
      sessionStorage.setItem(this.idArr, 'true');
    }
    // if (item.id == 1105 || item.id == 1106) {
    //   if (item.id == 1105) {
    //     sessionStorage.setItem('1105', 'true');
    //   }
    //   if (item.id == 1106) {
    //     sessionStorage.setItem('1106', 'true');
    //   }
    //   if (
    //     sessionStorage.getItem('1105') == 'true' ||
    //     sessionStorage.getItem('1106') == 'true'
    //   ) {
    //     this.Cms_allShow = true;
    //     this.Webservice_Show = true;
    //     this.Ecollection_Show = false;
    //   }
    // }

    // if (item.id == 1107) {
    //   sessionStorage.setItem('1107', 'true');
    // }
    // if (item.id == 1107) {
    //   this.Cms_allShow = true;
    //   this.Webservice_Show = false;
    //   this.Ecollection_Show = true;
    // }
    // else{
    //   this.Cms_allShow = false;
    //   this.Webservice_Show = false;
    //   this.Ecollection_Show = false;
    //   }
  }
  catArr: any = [];

  /****** To select group ******/
  onGroupDeSelect(items) {
    if (items.category) {
      console.log('check', items.list);
      for (var i = 0; i < items.list.length; i++) {
        this.idArr.push(items.list[i].id);
        this.catArr.push(items.list[i].category);
      }
      console.log('groupselect', this.idArr, this.catArr);
    }
    // if (items.category == CONSTANTS.CMS_COLLECTION) {
    //   sessionStorage.setItem('1105', 'true');
    //   sessionStorage.setItem('1106', 'true');
    //   sessionStorage.setItem('1107', 'true');
    //   this.Cms_allShow = true;
    //   this.Webservice_Show = true;
    //   this.Ecollection_Show = true;
    // }
  }

  /****** To Unselect group ******/
  onGroupSelect(items) {
    console.log(items.list);
    for (var i = 0; i < items.list.length; i++) {
      for (var j = 0; j < this.idArr.length; j++) {
        if (items.list[i].id === this.idArr[j]) {
          console.log('true');
          this.idArr.splice(j, 1);
          console.log('gropu arr', this.idArr);
        }
      }
    }

    // if(items.category){
    //   console.log("no check", items.list)
    // for(var i=0;i<items.list.length;i++){

    //   this.idArr = items.list[i].id;
    //   this.catArr= items.list[i].category;
    //   console.log("splice",this.idArr, this.catArr )
    //   this.idArr.splice(i,1);
    //   this.catArr.splice(i,1);
    //   }
    //   console.log("Deselect category",this.idArr,this.catArr)
    // }
    // sessionStorage.setItem(items.category , 'false');
    // if (items.category == CONSTANTS.CMS_COLLECTION) {
    //   sessionStorage.setItem('1105', 'false');
    //   sessionStorage.setItem('1106', 'false');
    //   sessionStorage.setItem('1107', 'false');
    //   this.Cms_allShow = false;
    //   this.Webservice_Show = false;
    //   this.Ecollection_Show = false;
    // }
  }

  onSelectAll(items: any) {
    for (var i = 0; i < items.length; i++) {
      this.idArr.push(items[i].id);
      this.catArr.push(items[i].category);
      //   var key = this.getKeyByValue(items, items[i].id);
      // console.log("key",key);
    }
    console.log('allselect', this.idArr, this.catArr);

    // if (items.category == CONSTANTS.CMS_COLLECTION) {
    //   this.Cms_allShow = true;
    //   this.Webservice_Show = true;
    //   this.Ecollection_Show = true;

    //   sessionStorage.setItem('1105', 'true');
    //   sessionStorage.setItem('1106', 'true');
    //   sessionStorage.setItem('1107', 'true');
    // }
    // var ips = [];
    // for (var i = 0; i < this.objOnB.txtSubDomain.length; ++i) {
    //   ips.push(this.objOnB.txtSubDomain[i].itemName+" ("+this.objOnB.txtSubDomain[i].id+")");
    // }
  }
  onDeSelectAll(items: any) {
    this.idArr = [];
    this.catArr = [];
    console.log('deselect all', this.catArr, this.idArr);
    // if (items.category == CONSTANTS.CMS_COLLECTION) {
    //   this.Cms_allShow = false;
    //   this.Webservice_Show = false;
    //   this.Ecollection_Show = false;

    //   sessionStorage.setItem('1105', 'false');
    //   sessionStorage.setItem('1106', 'false');
    //   sessionStorage.setItem('1107', 'false');
    // }
  }

  OnItemDeSelect(items: any) {
    for (var i = 0; i < this.idArr.length; i++) {
      if (items.id === this.idArr[i]) {
        this.idArr.splice(i, 1);
        console.log(this.idArr);
      }
      sessionStorage.setItem(items.id, 'false');
    }
    // if (items.id == 1105 || items.id == 1106) {
    //   if (items.id == 1105) {
    //     sessionStorage.setItem('1105', 'false');
    //   }
    //   if (items.id == 1106) {
    //     sessionStorage.setItem('1106', 'false');
    //   }
    //   if (
    //     sessionStorage.getItem('1105') == 'false' &&
    //     sessionStorage.getItem('1106') == 'false'
    //   ) {
    //     this.Webservice_Show = false;
    //   }
    //   if (
    //     sessionStorage.getItem('1105') == 'false' &&
    //     sessionStorage.getItem('1106') == 'false' &&
    //     sessionStorage.getItem('1107') == 'false'
    //   ) {
    //     this.Cms_allShow = false;
    //     this.Webservice_Show = false;
    //     this.Ecollection_Show = false;
    //   }
    // }

    // if (items.id == 1107) {
    //   if (items.id == 1107) {
    //     sessionStorage.setItem('1107', 'false');
    //   }
    //   if (
    //     sessionStorage.getItem('1105') == 'false' &&
    //     sessionStorage.getItem('1106') == 'false' &&
    //     sessionStorage.getItem('1107') == 'false'
    //   ) {
    //     this.Cms_allShow = false;
    //     this.Webservice_Show = false;
    //     this.Ecollection_Show = false;
    //   }
    // }
    // if (items.id == 1105 && items.id == 1106 && items.id == 1107) {
    //   this.Cms_allShow = false;
    //   this.Webservice_Show = false;
    //   this.Ecollection_Show = false;
    // }
    // else{
    //   this.Cms_allShow = false;
    //   this.Webservice_Show = false;
    //   this.Ecollection_Show = false;
    //   }
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
  //Next button in UAT
  btnNext() {
    this.frmUAT_A2 = true;
    this.frmUAT_A1 = false;
    this.frmUAT_A3 = false;

    this.shfrmUATSecond = true;
    this.shfrmUATFirst = false;
    this.shfrmUATThird = false;
  }
  //Next button in Production
  btnProdNext() {
    this.frmProd_A2 = true;
    this.frmProd_A1 = false;
    this.frmProd_A3 = false;

    this.shfrmProdSecond = true;
    this.shfrmProdFirst = false;
    this.shfrmProdThird = false;
  }
  //Nav tab in UAT
  uatNext(id) {
    if (this.shfrmUATFirst) {
      this.shfrmUATFirst = true;
    } else if (this.shfrmUATSecond) {
      this.shfrmUATFirst = id == 1 ? true : false;
      this.shfrmUATSecond = id > 1 ? true : false;
    } else {
      this.shfrmUATFirst = id == 1 ? true : false;
      this.shfrmUATSecond = id == 2 ? true : false;
      this.shfrmUATThird = id == 3 ? true : false;
    }
  }
  //Nav tab in production
  openProdCurrentTabEnv(id) {
    if (this.shfrmProdFirst) {
      this.shfrmProdFirst = true;
    } else if (this.shfrmProdSecond) {
      this.shfrmProdFirst = id == 1 ? true : false;
      this.shfrmProdSecond = id > 1 ? true : false;
    } else {
      this.shfrmProdFirst = id == 1 ? true : false;
      this.shfrmProdSecond = id == 2 ? true : false;
      this.shfrmProdThird = id == 3 ? true : false;
    }
  }
  //   getKeyByValue(object, value) {
  //     return Object.keys(object).find(key => object[key] === value);
  // }
  //Continue button in UAT
  btnContinue() {
    this.shfrmUATThird = true;
    this.shfrmUATFirst = false;
    this.shfrmUATSecond = false;

    //Jira Service
    // this.HttpClient.post<any>(
    //   'https://developer.icicibank.com/rest/getAdditionalParameters',
    //   this.idArr
    // ).subscribe(
    //   res => {
    //     console.log(res);
    //     if (res.success === 'true') {
    //       //File upload service
    //       var options = new FormData();
    //       let b: any = (<HTMLInputElement>document.getElementById('file1'))
    //         .files;
    //       for (let k = 0; k < b.length; k++) {
    //         options.append(res.jiraId, b[k]);
    //       }
    //       this.HttpClient.post<any>(
    //         'https://developer.icicibank.com/fileUpload',
    //         options,
    //       ).subscribe(
    //         res => {
    //           console.log(res);
    //         },
    //         err => {
    //           console.log('err', err);
    //           console.log('err headers', err.headers);
    //         },
    //       );
    //     }
    //   },
    //   err => {
    //     console.log('zze', err);
    //     console.log('zzz', err.headers);
    //   },
    // );
    this.idArr = this.internalArr.toString();
    this.internalArr =[];
    console.log('id array', this.idArr);

    var json = {
      ID: this.idArr,
    };
    console.log('json', json);
    this.adm.getUATFromData(json).subscribe((data: any) => {
      console.log(data);
      var response = data._body;
      var obj = JSON.parse(response);
      console.log('obj', obj);
      this.additionalParams = obj.ADDITIONAL_DETAILS.split(',');
      for (var i = 0; i < this.additionalParams.length; i++) {
        if (this.additionalParams[i].match('Account Number')) {
          this.accNo = true;
        }
        if (this.additionalParams[i].match('Client Code')) {
          this.clientCode = true;
        }
        if (this.additionalParams[i].match('URL')) {
          this.url = true;
        }
        if (this.additionalParams[i].match('IP')) {
          this.ip = true;
        }
        if (this.additionalParams[i].match('Port')) {
          this.port = true;
        }
        if (this.additionalParams[i].match('Checksum')) {
          this.checksum = true;
        }
        if (this.additionalParams[i].match('Encryption')) {
          this.encryption = true;
        }
        if (this.additionalParams[i].match('Certificate')) {
          this.certificate = true;
        }
        if (this.additionalParams[i].match('Service Type')) {
          this.service = true;
        }
        if (this.additionalParams[i].match('Communication Method')) {
          this.commModel = true;
        }
        if (this.additionalParams[i].match('IFSC Code')) {
          this.ifsc = true;
        }
        if (this.additionalParams[i].match('Virtual Code')) {
          this.virtualCode = true;
        }
        if (this.additionalParams[i].match('IPS Refund Code')) {
          this.ips = true;
        }
        if (this.additionalParams[i].match('Intermediate Account Number')) {
          this.interAccNo = true;
        }
        if (this.additionalParams[i].match('Account Name')) {
          this.accName = true;
        }
        if (this.additionalParams[i].match('Authorization Level')) {
          this.authLevel = true;
        }
        if (this.additionalParams[i].match('URN')) {
          this.urn = true;
        }
        if (this.additionalParams[i].match('Environment')) {
          this.env = true;
        }
        if (this.additionalParams[i].match('Validation Mode')) {
          this.valid = true;
        }
        if (this.additionalParams[i].match('Acceptance Mode')) {
          this.accept = true;
        }
        if (this.additionalParams[i].match('Recipient Mail ID')) {
          this.recipient = true;
        }
        if (this.additionalParams[i].match('Mode Offered')) {
          this.mode = true;
        }
        if (this.additionalParams[i].match('Transaction Limit')) {
          this.trans = true;
        }
        if (this.additionalParams[i].match('Amount')) {
          this.amount = true;
        }
      }
      console.log('final', this.additionalParams);
    });
  }
  //Continue button funcionality in Production
  openProdContinue() {
    this.shfrmProdFirst = true;
    this.shfrmProdSecond = false;
    this.shfrmProdThird = false;
  }
  //UAT
  openModaldemo(UATconfirm: TemplateRef<any>) {
    this.modalRef = this.modalService.show(UATconfirm);
  }

  btnConfirm(UATconfirm) {
    this.shfrmUATThird = true;
    this.shfrmUATFirst = false;
    this.shfrmUATSecond = false;
    var ips = [];
    for (var i = 0; i < this.objOnB.txtSubDomain.length; ++i) {
      ips.push(
        this.objOnB.txtSubDomain[i].itemName +
          ' (' +
          this.objOnB.txtSubDomain[i].id +
          ')',
      );
    }

    this.collection =
      this.objOnB.AccountNo +
      ' ' +
      this.objOnB.CmsClientCode +
      ' ' +
      this.objOnB.url +
      ' ' +
      this.objOnB.Ip +
      ' ' +
      this.objOnB.Port +
      ' ' +
      this.objOnB.Checksum +
      ' ' +
      this.objOnB.Encryption +
      ' ' +
      this.objOnB.Certificate +
      ' ' +
      this.objOnB.web +
      ' ' +
      this.objOnB.message +
      ' ' +
      this.objOnB.IFSC_Code +
      ' ' +
      this.objOnB.virtualCode +
      ' ' +
      this.objOnB.refundCode +
      ' ' +
      this.objOnB.Account_no +
      ' ' +
      this.objOnB.Acc_name +
      ' ' +
      this.objOnB.Auth_level +
      ' ' +
      this.objOnB.Urn +
      ' ' +
      this.objOnB.Acc_env +
      ' ' +
      this.objOnB.Acc_validation +
      ' ' +
      this.objOnB.Acc_acceptance +
      ' ' +
      this.objOnB.Rec_mail +
      ' ' +
      this.objOnB.Acc_mode +
      ' ' +
      this.objOnB.Acc_trans +
      ' ' +
      this.objOnB.Acc_amount;

    var inputFields = {
      userName: localStorage.getItem('username'),
      domainName: this.objOnB.txtDomainType,
      domainApis: ips.toString(),
      mName: this.objOnB.txtMerchantName,
      desc: this.objOnB.txtDescription + ' ' + this.collection,
      spocEmail: this.objOnB.txtContactEmail,
      spocPhone: this.objOnB.txtContactNumber,
      relManager: this.objOnB.txtRelManager,
      env: 'UAT',
      // ips: "",
      // callbackUrl: "",
      AccountNo: this.objOnB.AccountNo ? this.objOnB.AccountNo : '',
      ClientCode: this.objOnB.ClientCode ? this.objOnB.ClientCode : '',
      url: this.objOnB.url ? this.objOnB.url : '',
      Ip: this.objOnB.Ip ? this.objOnB.Ip : '',
      Port: this.objOnB.Port ? this.objOnB.Port : '',
      Checksum: this.objOnB.Checksum ? this.objOnB.Checksum : '',
      Encryption: this.objOnB.Encryption ? this.objOnB.Encryption : '',
      Certificate: this.objOnB.Certificate ? this.objOnB.Certificate : '',
      web: this.objOnB.web ? this.objOnB.web : '',
      message: this.objOnB.message ? this.objOnB.message : '',
      IFSC_Code: this.objOnB.IFSC_Code ? this.objOnB.IFSC_Code : '',
      virtualCode: this.objOnB.virtualCode ? this.objOnB.virtualCode : '',
      refundCode: this.objOnB.refundCode ? this.objOnB.refundCode : '',
      Account_no: this.objOnB.Account_no ? this.objOnB.Account_no : '',
      Acc_name: this.objOnB.Acc_name ? this.objOnB.Acc_name : '',
      Auth_level: this.objOnB.Auth_level ? this.objOnB.Auth_level : '',
      Urn: this.objOnB.Urn ? this.objOnB.Urn : '',
      Acc_env: this.objOnB.Acc_env ? this.objOnB.Acc_env : '',
      Acc_validation: this.objOnB.Acc_validation
        ? this.objOnB.Acc_validation
        : '',
      Acc_acceptance: this.objOnB.Acc_acceptance
        ? this.objOnB.Acc_acceptance
        : '',
      Rec_mail: this.objOnB.Rec_mail ? this.objOnB.Rec_mail : '',
      Acc_mode: this.objOnB.Acc_mode ? this.objOnB.Acc_mode : '',
      Acc_trans: this.objOnB.Acc_trans ? this.objOnB.Acc_trans : '',
      Acc_amount: this.objOnB.Acc_amount ? this.objOnB.Acc_amount : '',
      file1: this.objOnB.file1,
    };

    const formData = new FormData();

    formData.append('userName', inputFields['userName']);
    formData.append('domainName', inputFields['domainName']);
    formData.append('domainApis', inputFields['domainApis']);
    formData.append('mName', inputFields['mName']);
    formData.append('desc', inputFields['desc']);
    formData.append('spocEmail', inputFields['spocEmail']);
    formData.append('spocPhone', inputFields['spocPhone']);
    formData.append('relManager', inputFields['relManager']);
    formData.append('env', inputFields['env']);
    // formData.append("ips", inputFields["ips"]);
    // formData.append("callbackUrl", inputFields["callbackUrl"]);
    formData.append('AccountNo', inputFields['AccountNo']);
    formData.append('ClientCode', inputFields['ClientCode']);
    formData.append('url', inputFields['url']);
    formData.append('Ip', inputFields['Ip']);
    formData.append('Port', inputFields['Port']);
    formData.append('Checksum', inputFields['Checksum']);
    formData.append('Encryption', inputFields['Encryption']);
    formData.append('Certificate', inputFields['Certificate']);
    formData.append('web', inputFields['web']);
    formData.append('message', inputFields['message']);
    formData.append('IFSC_Code', inputFields['IFSC_Code']);
    formData.append('virtualCode', inputFields['virtualCode']);
    formData.append('refundCode', inputFields['refundCode']);
    formData.append('Account_no', inputFields['Account_no']);
    formData.append('Acc_name', inputFields['Acc_name']);
    formData.append('Auth_level', inputFields['Auth_level']);
    formData.append('Urn', inputFields['Urn']);
    formData.append('Acc_env', inputFields['Acc_env']);
    formData.append('Acc_validation', inputFields['Acc_validation']);
    formData.append('Acc_acceptance', inputFields['Acc_acceptance']);
    formData.append('Rec_mail', inputFields['Rec_mail']);
    formData.append('Acc_mode', inputFields['Acc_mode']);
    formData.append('Acc_trans', inputFields['Acc_trans']);
    formData.append('Acc_amount', inputFields['Acc_amount']);
    console.log(formData);
    let a: any = (<HTMLInputElement>document.getElementById('file1')).files;
    console.log('a', a);
    for (let k = 0; k < a.length; k++) {
      formData.append('file1', a[k]);
    }

    //Jira Service
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
        this.modalRef4.hide();
      },
      err => {
        console.log('zze', err);
        console.log('zzz', err.headers);
      },
    );
  }

  Close_ConfirmUAT() {
    this.modalRef.hide();
    this.modalRef4.hide();
    this.router.navigate(['/index']);
  }
  Close_ConfirmProd() {
    this.modalRef.hide();
    this.router.navigate(['/index']);
  }
  get_onboardUAT(UAT, signin) {
    if (localStorage.getItem('id') != null) {
      this.modalRef4 = this.modalService.show(UAT, { backdrop: 'static' });
    } else {
      this.modalRef = this.modalService.show(signin, { backdrop: 'static' });
    }
    this.shfrmUATFirst = true;
    this.shfrmUATSecond = false;
    this.shfrmUATThird = false;
  }
  //Production
  get_Production(Production, signin) {
    if (localStorage.getItem('id') != null) {
      this.modalRef5 = this.modalService.show(Production, {
        backdrop: 'static',
      });
      openProdCurrentTabEnv(0);
      setTimeout(() => {
        openProdCurrentTabEnv(0);
      });
      this.getRequestIds();
    } else {
      this.modalRef = this.modalService.show(signin, { backdrop: 'static' });
    }
  }

  getRequestIds() {
    this.list = [];

    let username = localStorage.getItem('username');
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded',
    );

    let options = {
      method: 'POST',
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded',
      ),
    };

    let body = new URLSearchParams();
    body.set('username', username);
    this.HttpClient.post(
      'https://developer.icicibank.com/rest/fetch-jiraid',
      body.toString(),
      options,
    ).subscribe(
      res => {
        this.list = res;
      },
      err => {
        this.list = [];
      },
    );
  }
  open_modal(Interested: TemplateRef<any>) {
    this.modalRef = this.modalService.show(Interested, { backdrop: 'static' });
    try {
      this.modalRef2.hide();
    } catch (e) {}
  }
  signup_link(id) {
    if (this.shfrmSFFirst) {
      this.shfrmSFFirst = true;
    } else if (this.shfrmSFSecond) {
      this.shfrmSFFirst = id == 1 ? true : false;
      this.shfrmSFSecond = id > 1 ? true : false;
    } else {
      this.shfrmSFFirst = id == 1 ? true : false;
      this.shfrmSFSecond = id == 2 ? true : false;
      this.shfrmSFThird = id == 3 ? true : false;
    }
  }

  changeItem(JiraId) {
    this.JiraIdnew = JiraId;
    for (var j in this.list) {
      if (this.list[j]['JiraId'] == JiraId) {
        this.edit_data = this.list[j];
        this.edit_data['CallbackUrl'] = '';
        this.edit_data['whitelistIpInputModal'] = '';
        break;
      }
    }
  }
  //Confirm button functionality in Production
  btnConfirmProd(Prodconfirm) {
    this.shfrmProdThird = true;
    this.shfrmProdFirst = false;
    this.shfrmProdSecond = false;
    var ips = [];
    for (var i = 0; i < this.edit_data.DomainApi.length; ++i) {
      ips.push(
        this.edit_data.DomainApi[i].itemName +
          ' (' +
          this.edit_data.DomainApi[i].id +
          ')',
      );
    }

    this.collection =
      this.edit_data.AccountNo +
      ' ' +
      this.edit_data.CmsClientCode +
      ' ' +
      this.edit_data.url +
      ' ' +
      this.edit_data.Ip +
      ' ' +
      this.edit_data.Port +
      ' ' +
      this.edit_data.Checksum +
      ' ' +
      this.edit_data.Encryption +
      ' ' +
      this.edit_data.Certificate +
      ' ' +
      this.edit_data.web +
      ' ' +
      this.edit_data.message +
      ' ' +
      this.edit_data.IFSC_Code +
      ' ' +
      this.edit_data.virtualCode +
      ' ' +
      this.edit_data.refundCode +
      ' ' +
      this.edit_data.Account_no +
      ' ' +
      this.edit_data.Acc_name +
      ' ' +
      this.edit_data.Auth_level +
      ' ' +
      this.edit_data.Urn +
      ' ' +
      this.edit_data.Acc_env +
      ' ' +
      this.edit_data.Acc_validation +
      ' ' +
      this.edit_data.Acc_acceptance +
      ' ' +
      this.edit_data.Rec_mail +
      ' ' +
      this.edit_data.Acc_mode +
      ' ' +
      this.edit_data.Acc_trans +
      ' ' +
      this.edit_data.Acc_amount;

    var inputFields = {
      userName: localStorage.getItem('username'),
      domainName: this.edit_data['Domain'],
      domainApis: this.edit_data['DomainApi'],
      mName: this.edit_data['MerchantName'],
      desc: this.edit_data['Description'],
      spocEmail: this.edit_data['SpocEmail'],
      spocPhone: this.edit_data['SpocPhone'],
      relManager: this.edit_data['RelManager'],
      env: 'PROD',
      ips: this.edit_data['whitelistIpInputModal'],
      callbackUrl: this.edit_data['CallbackUrl'],
      file2: this.edit_data.file2,
      jiraRefId: this.JiraIdnew,
    };

    //console.log('inputFields',inputFields);

    const formData = new FormData();

    formData.append('userName', inputFields['userName']);
    formData.append('domainName', inputFields['domainName']);
    formData.append('domainApis', inputFields['domainApis']);
    formData.append('mName', inputFields['mName']);
    formData.append('desc', inputFields['desc']);
    formData.append('spocEmail', inputFields['spocEmail']);
    formData.append('spocPhone', inputFields['spocPhone']);
    formData.append('relManager', inputFields['relManager']);
    formData.append('env', inputFields['env']);
    formData.append('ips', inputFields['ips']);
    formData.append('callbackUrl', inputFields['callbackUrl']);

    let a: any = (<HTMLInputElement>document.getElementById('file2')).files;
    for (let k = 0; k < a.length; k++) {
      formData.append('file2', a[k]);
    }
    formData.append('jiraRefId', this.JiraIdnew);
    //console.log(formData);
    this.HttpClient.post<any>(
      'https://developerapi.icicibank.com:8443/api/v2/jira',
      formData,
    ).subscribe(
      res => {
        console.log(res);
        if (res.success === 'true') {
          //File upload service
          var formData = new FormData();
          let b: any = (<HTMLInputElement>document.getElementById('file2'))
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
        // this.toastrmsg('success', res['message']);
        this.modalRef = this.modalService.show(Prodconfirm, {
          backdrop: 'static',
        });
        this.confirmMsgProd = res['message'];
        this.confirmMsgProd = this.confirmMsgProd.substring(51, 44);
        this.modalRef5.hide();
      },
      err => {
        console.log('zze', err);
        console.log('zzz', err.headers);
      },
    );
  }

  feedback_form_submit(signin) {
    if (this.issues == '') {
      this.toastrmsg('error', 'Please select Issue related to.');
      return;
    }
    //  if(this.Suggestion==""){
    //   this.toastrmsg('error', "Please select Suggestion.");
    //   return;
    //  }
    else {
      if (localStorage.getItem('id') != null) {
        var json = {
          email: this.feedback_email_address,
          location: this.feedback_location_name,
          feedback: this.feedback_email_test,
          topic: this.issues,
          feedbackIn: this.feedback_email_test + '' + this.issues,
          // "feedbackIn":this.feedback_email_test+''+this.issues+' '+this.Suggestion
        };
        this.adm.feedback(json).subscribe((data: any) => {
          var obj = JSON.parse(data._body);
          if (obj.status == true) {
            this.toastrmsg('success', 'Thank your for your suggestion.');
            this.feedback_email_address = '';
            this.feedback_location_name = '';
            this.feedback_email_test = '';
            this.issues = '';
          } else {
            this.toastrmsg('error', obj.message);
          }
        });
      } else {
        this.browse_api(signin);
      }
    }
  }
  Inter_full_name: String = '';
  Inter_email: String = '';
  Inter_contactnumber: String = '';
  Inter_location: String = '';
  Inter_company: String = '';
  Inter_requirements: String = '';

  inter_submit() {
    // var feedback =
    //   'User Interested Full Name = ' +
    //   this.Inter_full_name +
    //   ' Contact Number =' +
    //   this.Inter_contactnumber;
    // var json = { email: this.Inter_email, feedbackIn: feedback };
    // this.adm.feedback(json).subscribe((data: any) => {
    //   var obj = JSON.parse(data._body);
    //   if (obj.status == true) {
    //     this.toastrmsg('success', 'Thank your for your Request.');
    //     this.Inter_full_name = '';
    //     this.Inter_contactnumber = '';
    //     this.Inter_email = '';
    //     this.modalRef.hide();
    //   } else {
    //     this.toastrmsg('error', obj.message);
    //   }
    // });
    var feedback =
      'User Interested Full Name = ' +
      this.Inter_full_name +
      ' Contact Number =' +
      this.Inter_contactnumber;
    var json = {
      fullName: this.Inter_full_name,
      email: this.Inter_email,
      mobile: this.Inter_contactnumber,
      location: this.Inter_location,
      company: this.Inter_company,
      requirements: this.Inter_requirements,
      feedbackIn: feedback,
    };
    console.log('josn', json);
    this.adm.feedback(json).subscribe((data: any) => {
      var obj = JSON.parse(data._body);
      if (obj.status == true) {
        this.toastrmsg('success', 'Thank your for your Request.');
        this.Inter_full_name = '';
        this.Inter_contactnumber = '';
        this.Inter_email = '';
        this.Inter_location = '';
        this.Inter_company = '';
        this.Inter_requirements = '';
        this.modalRef.hide();
      } else {
        this.toastrmsg('error', obj.message);
      }
    });
  }

  alredy_login() {
    this.modalRef7.hide();
    this.router.navigate(['/documentation']);
  }

  HWI_link(id) {
    this.showTab = id;
    //this.active ='#F06321';
  }

  onChangeAccountNum(event) {
    let result;
    let patt = PATTERNS.REGEX_NUMBERS;
    if (event === '') {
      this.accountNumErrorMsg = '';
    } else {
      result = patt.test(event);
      if (result === false) {
        this.accountNumErrorMsg = CONSTANTS.NUMERIC_VAL;
      } else {
        this.accountNumErrorMsg = '';
      }
      return result;
    }
  }

  onChangeIpAddress(event) {
    let result;
    let pattern = PATTERNS.REGEX_IP;
    if (event === '') {
      this.ipAddressErrorMsg = '';
    } else {
      result = pattern.test(event);
      if (result === false) {
        this.ipAddressErrorMsg = CONSTANTS.IP_ADDRESS;
      } else {
        this.ipAddressErrorMsg = '';
      }
      return result;
    }
  }

  onChangePort(event) {
    let result;
    let pattern = PATTERNS.REGEX_PORT;

    if (event === '') {
      this.portNumErrorMsg = '';
    } else {
      result = pattern.test(event);
      if (result === false) {
        this.portNumErrorMsg = CONSTANTS.PORT_ADDRESS;
      } else {
        this.portNumErrorMsg = '';
      }
      return result;
    }
  }

  onChangeURL(event) {
    let result;
    let pattern = PATTERNS.REGEX_URL;
    if (event === '') {
      this.urlErrorMsg = '';
    } else {
      result = pattern.test(event);
      if (result === false) {
        this.urlErrorMsg = CONSTANTS.URL;
      } else {
        this.urlErrorMsg = '';
      }
      return result;
    }
  }

  numericOnly(event): boolean {
    console.log('keypress');
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  //componay name autocomplete
  getCompanyName(companyName) {
    this.adm.getCompanyName(companyName).subscribe(data => {
      if (data.status === 200) {
        this.companyNamesDetails = data;
        this.companyNames = JSON.parse(this.companyNamesDetails._body);
      }
    });
  }
}
