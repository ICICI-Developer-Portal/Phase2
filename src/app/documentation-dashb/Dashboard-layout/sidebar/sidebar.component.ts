import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services';
import { document } from 'ngx-bootstrap';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  //styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
  constructor(
    private router: Router,
    private dashboardService: DashboardService,
  ) {}

  ngOnInit() {
    var self = this;
    //api for get menu tree data
    //this.getMenuTree();
    this.treeData = [
      {
        TAB_NAME: 'Building Blocks',
        TYPE: 'root',
        TREE_ID: '1',
        POSITION: '1',
        STATUS: 'active',
        CHILD_COUNT: '6',
        API_ID: '1',
        LEVEL: '1',
        children: [
          {
            TAB_NAME: 'Pre approved offers',
            TYPE: 'branch',
            TREE_ID: '2',
            POSITION: '1',
            STATUS: 'active',
            CHILD_COUNT: '5',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Get Pre approved offers',
                TYPE: 'api',
                TREE_ID: '3',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '431',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Pre approved offers On Customer ID',
                TYPE: 'api',
                TREE_ID: '4',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '432',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Pre approved offers On Mobile',
                TYPE: 'api',
                TREE_ID: '5',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '433',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Pre Approved Offers',
                TYPE: 'api',
                TREE_ID: '6',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '434',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Block Pre approved offers',
                TYPE: 'api',
                TREE_ID: '7',
                POSITION: '5',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '435',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'Customer Authentication',
            TYPE: 'branch',
            TREE_ID: '8',
            POSITION: '2',
            STATUS: 'active',
            CHILD_COUNT: '4',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'OTP Generation',
                TYPE: 'api',
                TREE_ID: '9',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '731',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'OTP Verification',
                TYPE: 'api',
                TREE_ID: '10',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '732',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Aadhar Based OTP Generation',
                TYPE: 'api',
                TREE_ID: '11',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '739',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Aadhar Based OTP Verification',
                TYPE: 'api',
                TREE_ID: '12',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '740',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'New Customer Onboarding',
            TYPE: 'branch',
            TREE_ID: '13',
            POSITION: '3',
            STATUS: 'active',
            CHILD_COUNT: '3',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Demographic Details',
                TYPE: 'branch',
                TREE_ID: '14',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '5',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'State Locator',
                    TYPE: 'api',
                    TREE_ID: '15',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '735',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'City Locator',
                    TYPE: 'api',
                    TREE_ID: '16',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '736',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Company Locator',
                    TYPE: 'api',
                    TREE_ID: '17',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '744',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Esign (Initial)',
                    TYPE: 'api',
                    TREE_ID: '18',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '745',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Esign (Final)',
                    TYPE: 'api',
                    TREE_ID: '19',
                    POSITION: '5',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '746',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Account',
                TYPE: 'branch',
                TREE_ID: '20',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '3',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Choose Your Account',
                    TYPE: 'api',
                    TREE_ID: '21',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '751',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Customer Registeration',
                    TYPE: 'api',
                    TREE_ID: '22',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '750',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Account Activation',
                    TYPE: 'api',
                    TREE_ID: '23',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '749',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Additional Features',
                TYPE: 'branch',
                TREE_ID: '24',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '2',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Face Reader',
                    TYPE: 'api',
                    TREE_ID: '25',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '733',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Image Reader',
                    TYPE: 'branch',
                    TREE_ID: '26',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '4',
                    API_ID: '734',
                    LEVEL: '4',
                    children: [
                      {
                        TAB_NAME: 'Face Reader1',
                        TYPE: 'api',
                        TREE_ID: '25',
                        POSITION: '1',
                        STATUS: 'active',
                        CHILD_COUNT: '0',
                        API_ID: '733',
                        LEVEL: '4',
                      },
                      {
                        TAB_NAME: 'Face Reader1',
                        TYPE: 'api',
                        TREE_ID: '25',
                        POSITION: '1',
                        STATUS: 'active',
                        CHILD_COUNT: '0',
                        API_ID: '733',
                        LEVEL: '4',
                      },
                      {
                        TAB_NAME: 'Face Reader3',
                        TYPE: 'api',
                        TREE_ID: '25',
                        POSITION: '1',
                        STATUS: 'active',
                        CHILD_COUNT: '0',
                        API_ID: '733',
                        LEVEL: '4',
                      },
                      {
                        TAB_NAME: 'Face Reader4',
                        TYPE: 'api',
                        TREE_ID: '25',
                        POSITION: '1',
                        STATUS: 'active',
                        CHILD_COUNT: '0',
                        API_ID: '733',
                        LEVEL: '4',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            TAB_NAME: 'Bureau Check',
            TYPE: 'api',
            TREE_ID: '27',
            POSITION: '4',
            STATUS: 'active',
            CHILD_COUNT: '0',
            API_ID: '801',
            LEVEL: '2',
          },
          {
            TAB_NAME: 'PAN Validation',
            TYPE: 'api',
            TREE_ID: '28',
            POSITION: '5',
            STATUS: 'active',
            CHILD_COUNT: '0',
            API_ID: '803',
            LEVEL: '2',
          },
          {
            TAB_NAME: 'Eligibility Check',
            TYPE: 'api',
            TREE_ID: '29',
            POSITION: '6',
            STATUS: 'active',
            CHILD_COUNT: '0',
            API_ID: '802',
            LEVEL: '2',
          },
        ],
      },
      {
        TAB_NAME: 'Loans and Cards',
        TYPE: 'root',
        TREE_ID: '30',
        POSITION: '2',
        STATUS: 'active',
        CHILD_COUNT: '3',
        API_ID: '1',
        LEVEL: '1',
        children: [
          {
            TAB_NAME: 'Loans',
            TYPE: 'branch',
            TREE_ID: '31',
            POSITION: '1',
            STATUS: 'active',
            CHILD_COUNT: '5',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Auto Loan',
                TYPE: 'branch',
                TREE_ID: '32',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '6',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'OTP Creation',
                    TYPE: 'api',
                    TREE_ID: '33',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '612',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Get Offer',
                    TYPE: 'api',
                    TREE_ID: '34',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '613',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Eligibility Check',
                    TYPE: 'api',
                    TREE_ID: '35',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '614',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Sanction Letter',
                    TYPE: 'api',
                    TREE_ID: '36',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '617',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Bank Statement Upload',
                    TYPE: 'api',
                    TREE_ID: '37',
                    POSITION: '5',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '615',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Document Upload',
                    TYPE: 'api',
                    TREE_ID: '38',
                    POSITION: '6',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '616',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Personal Loan V1',
                TYPE: 'branch',
                TREE_ID: '39',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '4',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'OTP Creation',
                    TYPE: 'api',
                    TREE_ID: '40',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '606',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Get Offer',
                    TYPE: 'api',
                    TREE_ID: '41',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '433',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Offer Validation',
                    TYPE: 'api',
                    TREE_ID: '42',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '1202',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Offer Confirmation',
                    TYPE: 'api',
                    TREE_ID: '43',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '1203',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Personal Loan V2',
                TYPE: 'branch',
                TREE_ID: '44',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '6',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'OTP Creation',
                    TYPE: 'api',
                    TREE_ID: '45',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '606',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Get Offer',
                    TYPE: 'api',
                    TREE_ID: '46',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '607',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Eligibility Check',
                    TYPE: 'api',
                    TREE_ID: '47',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '608',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Bank Statement Upload',
                    TYPE: 'api',
                    TREE_ID: '48',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '609',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Document Upload',
                    TYPE: 'api',
                    TREE_ID: '49',
                    POSITION: '5',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '610',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Loan Disbursement',
                    TYPE: 'api',
                    TREE_ID: '50',
                    POSITION: '6',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '611',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Topup',
                TYPE: 'branch',
                TREE_ID: '51',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '3',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Fetch Offer',
                    TYPE: 'api',
                    TREE_ID: '52',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '501',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Generate Agreement letter',
                    TYPE: 'api',
                    TREE_ID: '53',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '502',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Loan Disburesment',
                    TYPE: 'api',
                    TREE_ID: '54',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '503',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Loan Management',
                TYPE: 'branch',
                TREE_ID: '55',
                POSITION: '5',
                STATUS: 'active',
                CHILD_COUNT: '7',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Get Loan Account Details',
                    TYPE: 'api',
                    TREE_ID: '56',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '618',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Repayment Details',
                    TYPE: 'api',
                    TREE_ID: '57',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '619',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Profile Information',
                    TYPE: 'api',
                    TREE_ID: '58',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '620',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Disbursement Details',
                    TYPE: 'api',
                    TREE_ID: '59',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '621',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Loan Credential Verification Check',
                    TYPE: 'api',
                    TREE_ID: '60',
                    POSITION: '5',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '622',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Income Tax Certificate',
                    TYPE: 'api',
                    TREE_ID: '61',
                    POSITION: '6',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '623',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Overdue Outstanding',
                    TYPE: 'api',
                    TREE_ID: '62',
                    POSITION: '7',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '624',
                    LEVEL: '4',
                  },
                ],
              },
            ],
          },
          {
            TAB_NAME: 'Cards',
            TYPE: 'branch',
            TREE_ID: '63',
            POSITION: '2',
            STATUS: 'active',
            CHILD_COUNT: '2',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Credit Cards',
                TYPE: 'branch',
                TREE_ID: '64',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '7',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'OTP Creation',
                    TYPE: 'api',
                    TREE_ID: '65',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '612',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Get Offer',
                    TYPE: 'api',
                    TREE_ID: '66',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '1101',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Card Details',
                    TYPE: 'api',
                    TREE_ID: '67',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '1102',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Card Creation',
                    TYPE: 'api',
                    TREE_ID: '68',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '1103',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Card Status',
                    TYPE: 'api',
                    TREE_ID: '69',
                    POSITION: '5',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '212',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Block Card',
                    TYPE: 'api',
                    TREE_ID: '70',
                    POSITION: '6',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '210',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Unblock Card',
                    TYPE: 'api',
                    TREE_ID: '71',
                    POSITION: '7',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '211',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Prepaid card',
                TYPE: 'branch',
                TREE_ID: '72',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '22',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Application Processing',
                    TYPE: 'api',
                    TREE_ID: '73',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '300',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Fetch Card Information',
                    TYPE: 'api',
                    TREE_ID: '82',
                    POSITION: '10',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '309',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Monthly Statement',
                    TYPE: 'api',
                    TREE_ID: '83',
                    POSITION: '11',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '310',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Card Block/Unblock',
                    TYPE: 'api',
                    TREE_ID: '84',
                    POSITION: '12',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '311',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Transaction Enquiry',
                    TYPE: 'api',
                    TREE_ID: '85',
                    POSITION: '13',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '312',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Get Card (Mobile Number)',
                    TYPE: 'api',
                    TREE_ID: '86',
                    POSITION: '14',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '313',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Update Buyer Information',
                    TYPE: 'api',
                    TREE_ID: '87',
                    POSITION: '15',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '314',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Upgrade Card (Virtual To Physical)',
                    TYPE: 'api',
                    TREE_ID: '88',
                    POSITION: '16',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '315',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Account Statement',
                    TYPE: 'api',
                    TREE_ID: '89',
                    POSITION: '17',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '316',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Card Close',
                    TYPE: 'api',
                    TREE_ID: '90',
                    POSITION: '18',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '318',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Credit Freeze To Active',
                    TYPE: 'api',
                    TREE_ID: '91',
                    POSITION: '19',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '319',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Card Activation',
                    TYPE: 'api',
                    TREE_ID: '74',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '301',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Passive To Active',
                    TYPE: 'api',
                    TREE_ID: '92',
                    POSITION: '20',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '320',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Update/Change PIN',
                    TYPE: 'api',
                    TREE_ID: '93',
                    POSITION: '21',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '322',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Periodic Statement',
                    TYPE: 'api',
                    TREE_ID: '94',
                    POSITION: '22',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '324',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Last 10 Transactions Details',
                    TYPE: 'api',
                    TREE_ID: '75',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '302',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Card Topup (Card To Card)',
                    TYPE: 'api',
                    TREE_ID: '76',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '303',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Card Topup',
                    TYPE: 'api',
                    TREE_ID: '77',
                    POSITION: '5',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '304',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Card Instant Debit',
                    TYPE: 'api',
                    TREE_ID: '78',
                    POSITION: '6',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '305',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Card Limit Verification',
                    TYPE: 'api',
                    TREE_ID: '79',
                    POSITION: '7',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '306',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Fetch Contact Information',
                    TYPE: 'api',
                    TREE_ID: '80',
                    POSITION: '8',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '307',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Fetch Personal Information',
                    TYPE: 'api',
                    TREE_ID: '81',
                    POSITION: '9',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '308',
                    LEVEL: '4',
                  },
                ],
              },
            ],
          },
          {
            TAB_NAME: 'Paylater',
            TYPE: 'branch',
            TREE_ID: '95',
            POSITION: '3',
            STATUS: 'active',
            CHILD_COUNT: '2',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Account Creation',
                TYPE: 'api',
                TREE_ID: '96',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '436',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Account Management',
                TYPE: 'branch',
                TREE_ID: '97',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '6',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Application Status Check',
                    TYPE: 'api',
                    TREE_ID: '98',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '437',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Balance Inquiry',
                    TYPE: 'api',
                    TREE_ID: '99',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '438',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Bill Inquiry',
                    TYPE: 'api',
                    TREE_ID: '100',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '439',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Statement',
                    TYPE: 'api',
                    TREE_ID: '101',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '440',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Pay Dues',
                    TYPE: 'api',
                    TREE_ID: '102',
                    POSITION: '5',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '441',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'OD A/c Discovery',
                    TYPE: 'api',
                    TREE_ID: '103',
                    POSITION: '6',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '442',
                    LEVEL: '4',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        TAB_NAME: 'Payments',
        TYPE: 'root',
        TREE_ID: '104',
        POSITION: '3',
        STATUS: 'active',
        CHILD_COUNT: '5',
        API_ID: '1',
        LEVEL: '1',
        children: [
          {
            TAB_NAME: 'UPI 1.0',
            TYPE: 'branch',
            TREE_ID: '105',
            POSITION: '1',
            STATUS: 'active',
            CHILD_COUNT: '8',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Get Token',
                TYPE: 'api',
                TREE_ID: '106',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '125',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Account Registration',
                TYPE: 'branch',
                TREE_ID: '107',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '5',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Register Mobile Number',
                    TYPE: 'api',
                    TREE_ID: '108',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '128',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Generate OTP',
                    TYPE: 'api',
                    TREE_ID: '109',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '127',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Pay to VPA',
                TYPE: 'branch',
                TREE_ID: '110',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '5',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'List Customer Accounts',
                    TYPE: 'api',
                    TREE_ID: '111',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '126',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Validate Virtual Address',
                    TYPE: 'api',
                    TREE_ID: '112',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '130',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Pay Request',
                    TYPE: 'api',
                    TREE_ID: '113',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '138',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Common Pay Request',
                    TYPE: 'api',
                    TREE_ID: '114',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '131',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Global Pay Request',
                    TYPE: 'api',
                    TREE_ID: '115',
                    POSITION: '5',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '137',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Collect from VPA',
                TYPE: 'branch',
                TREE_ID: '116',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '3',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'List Customer Accounts',
                    TYPE: 'api',
                    TREE_ID: '117',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '126',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Validate Virtual Address',
                    TYPE: 'api',
                    TREE_ID: '118',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '130',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Collect Request',
                    TYPE: 'api',
                    TREE_ID: '119',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '133',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Collect from Authorization',
                TYPE: 'branch',
                TREE_ID: '120',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '3',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'List Customer Accounts',
                    TYPE: 'api',
                    TREE_ID: '121',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '126',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Validate Virtual Address',
                    TYPE: 'api',
                    TREE_ID: '122',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '130',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Collect Authorization',
                    TYPE: 'api',
                    TREE_ID: '123',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '135',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Merchant Pay Request',
                TYPE: 'branch',
                TREE_ID: '124',
                POSITION: '5',
                STATUS: 'active',
                CHILD_COUNT: '4',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'List Customer Accounts',
                    TYPE: 'api',
                    TREE_ID: '125',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '126',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Validate Virtual Address',
                    TYPE: 'api',
                    TREE_ID: '126',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '130',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Manage Verified Address',
                    TYPE: 'api',
                    TREE_ID: '127',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '129',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Merchant Pay Request',
                    TYPE: 'api',
                    TREE_ID: '128',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '136',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Merchant Collect Request',
                TYPE: 'branch',
                TREE_ID: '129',
                POSITION: '6',
                STATUS: 'active',
                CHILD_COUNT: '3',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'List Customer Accounts',
                    TYPE: 'api',
                    TREE_ID: '130',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '126',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Validate Virtual Address',
                    TYPE: 'api',
                    TREE_ID: '131',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '130',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Merchant Collect Request',
                    TYPE: 'api',
                    TREE_ID: '132',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '139',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Transaction Details',
                TYPE: 'branch',
                TREE_ID: '133',
                POSITION: '7',
                STATUS: 'active',
                CHILD_COUNT: '4',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Balance Inquiry',
                    TYPE: 'api',
                    TREE_ID: '134',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '132',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Transaction Status',
                    TYPE: 'api',
                    TREE_ID: '135',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '140',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Get Transaction Details',
                    TYPE: 'api',
                    TREE_ID: '136',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '141',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Get Transaction History',
                    TYPE: 'api',
                    TREE_ID: '137',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '142',
                    LEVEL: '4',
                  },
                ],
              },
            ],
          },
          {
            TAB_NAME: 'UPI 2.0',
            TYPE: 'branch',
            TREE_ID: '138',
            POSITION: '2',
            STATUS: 'active',
            CHILD_COUNT: '6',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Add Account',
                TYPE: 'branch',
                TREE_ID: '139',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '6',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Validate Virtual Address',
                    TYPE: 'api',
                    TREE_ID: '140',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '107',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'List Account Provider',
                    TYPE: 'api',
                    TREE_ID: '141',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '101',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'List Accounts',
                    TYPE: 'api',
                    TREE_ID: '142',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '102',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Generate OTP',
                    TYPE: 'api',
                    TREE_ID: '143',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '103',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'List Keys',
                    TYPE: 'api',
                    TREE_ID: '144',
                    POSITION: '5',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '104',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Register Mobile Number',
                    TYPE: 'api',
                    TREE_ID: '145',
                    POSITION: '6',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '105',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Pay To VPA',
                TYPE: 'branch',
                TREE_ID: '146',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '3',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Get Customer Accounts',
                    TYPE: 'api',
                    TREE_ID: '147',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '106',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Validate Virtual Address',
                    TYPE: 'api',
                    TREE_ID: '148',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '107',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Pay To Virtual Address',
                    TYPE: 'api',
                    TREE_ID: '149',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '108',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Collect From VPA',
                TYPE: 'branch',
                TREE_ID: '150',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '3',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Get Customer Accounts',
                    TYPE: 'api',
                    TREE_ID: '151',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '106',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Validate Virtual Address',
                    TYPE: 'api',
                    TREE_ID: '152',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '107',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Collect Request',
                    TYPE: 'api',
                    TREE_ID: '153',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '109',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Mandates',
                TYPE: 'branch',
                TREE_ID: '154',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '6',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Manage Mandate',
                    TYPE: 'api',
                    TREE_ID: '155',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '112',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Get Pending Mandates',
                    TYPE: 'api',
                    TREE_ID: '156',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '113',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Approve/Reject Mandates',
                    TYPE: 'api',
                    TREE_ID: '157',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '110',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Get All Mandates',
                    TYPE: 'api',
                    TREE_ID: '158',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '114',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Mandate History',
                    TYPE: 'api',
                    TREE_ID: '159',
                    POSITION: '5',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '115',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Initiate Mandates Collect',
                    TYPE: 'api',
                    TREE_ID: '160',
                    POSITION: '6',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '116',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Balance Inquiry',
                TYPE: 'branch',
                TREE_ID: '161',
                POSITION: '5',
                STATUS: 'active',
                CHILD_COUNT: '2',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Get Customer Accounts',
                    TYPE: 'api',
                    TREE_ID: '162',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '106',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Balance Inquiry',
                    TYPE: 'api',
                    TREE_ID: '163',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '117',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Change Reset MPIN',
                TYPE: 'branch',
                TREE_ID: '164',
                POSITION: '6',
                STATUS: 'active',
                CHILD_COUNT: '10',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Get Customer Accounts',
                    TYPE: 'api',
                    TREE_ID: '165',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '106',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'List Accounts',
                    TYPE: 'api',
                    TREE_ID: '176',
                    POSITION: '10',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '102',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Change MPIN',
                    TYPE: 'api',
                    TREE_ID: '166',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '118',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Generate OTP',
                    TYPE: 'api',
                    TREE_ID: '167',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '103',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Register Mobile Number',
                    TYPE: 'api',
                    TREE_ID: '168',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '105',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Deregister Profile',
                    TYPE: 'api',
                    TREE_ID: '169',
                    POSITION: '5',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '119',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Merchant Refund Request',
                    TYPE: 'api',
                    TREE_ID: '170',
                    POSITION: '6',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '120',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Transaction Status',
                    TYPE: 'api',
                    TREE_ID: '171',
                    POSITION: '7',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '121',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Common Pay Request',
                    TYPE: 'api',
                    TREE_ID: '172',
                    POSITION: '8',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '122',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Signed Intent QR',
                    TYPE: 'branch',
                    TREE_ID: '173',
                    POSITION: '9',
                    STATUS: 'active',
                    CHILD_COUNT: '2',
                    API_ID: '1',
                    LEVEL: '4',
                    children: [
                      {
                        TAB_NAME: 'List PSP Keys',
                        TYPE: 'api',
                        TREE_ID: '174',
                        POSITION: '1',
                        STATUS: 'active',
                        CHILD_COUNT: '0',
                        API_ID: '123',
                        LEVEL: '5',
                      },
                      {
                        TAB_NAME: 'Manage Verified Address',
                        TYPE: 'api',
                        TREE_ID: '175',
                        POSITION: '2',
                        STATUS: 'active',
                        CHILD_COUNT: '0',
                        API_ID: '124',
                        LEVEL: '5',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            TAB_NAME: 'Utility Payments',
            TYPE: 'branch',
            TREE_ID: '177',
            POSITION: '3',
            STATUS: 'active',
            CHILD_COUNT: '23',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Reset Password',
                TYPE: 'api',
                TREE_ID: '178',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '626',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Check Bill Fetch Support',
                TYPE: 'api',
                TREE_ID: '187',
                POSITION: '10',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '633',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Biller Customer Parameters',
                TYPE: 'api',
                TREE_ID: '188',
                POSITION: '11',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '634',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Fetch Bill',
                TYPE: 'api',
                TREE_ID: '189',
                POSITION: '12',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '635',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Fetch Bill by Previous Transaction Ref id',
                TYPE: 'api',
                TREE_ID: '190',
                POSITION: '13',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '636',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Generate Transaction Reference Id',
                TYPE: 'api',
                TREE_ID: '191',
                POSITION: '14',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '640',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Validate Customer Parameters (Pay-Only Biller)',
                TYPE: 'api',
                TREE_ID: '192',
                POSITION: '15',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '637',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Validate Payment Amount',
                TYPE: 'api',
                TREE_ID: '193',
                POSITION: '16',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '638',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Pay Bill (Fetch & Pay Bill)',
                TYPE: 'api',
                TREE_ID: '194',
                POSITION: '17',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '641',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Pay Bill (Pay Only)',
                TYPE: 'api',
                TREE_ID: '195',
                POSITION: '18',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '642',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Raise Complaint',
                TYPE: 'api',
                TREE_ID: '196',
                POSITION: '19',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '647',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Fetch Last ’N’ Transaction',
                TYPE: 'api',
                TREE_ID: '179',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '627',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Complaint Status',
                TYPE: 'api',
                TREE_ID: '197',
                POSITION: '20',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '646',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Transaction Complaint Dispositions',
                TYPE: 'api',
                TREE_ID: '198',
                POSITION: '21',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '644',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Service Reasons',
                TYPE: 'api',
                TREE_ID: '199',
                POSITION: '22',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '645',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Tax Amount',
                TYPE: 'api',
                TREE_ID: '200',
                POSITION: '23',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '639',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Transaction Metrics',
                TYPE: 'api',
                TREE_ID: '180',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '628',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Customer Transaction',
                TYPE: 'api',
                TREE_ID: '181',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '643',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Paid Bill',
                TYPE: 'api',
                TREE_ID: '182',
                POSITION: '5',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '629',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Category List',
                TYPE: 'api',
                TREE_ID: '183',
                POSITION: '6',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '630',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Biller List',
                TYPE: 'api',
                TREE_ID: '184',
                POSITION: '7',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '631',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Sub-Biller List',
                TYPE: 'api',
                TREE_ID: '185',
                POSITION: '8',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '632',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get All Billers (All Biller List)',
                TYPE: 'api',
                TREE_ID: '186',
                POSITION: '9',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '648',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'Eazypay',
            TYPE: 'branch',
            TREE_ID: '201',
            POSITION: '4',
            STATUS: 'active',
            CHILD_COUNT: '5',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'QR Code',
                TYPE: 'api',
                TREE_ID: '202',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '601',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Collect Pay',
                TYPE: 'api',
                TREE_ID: '203',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '602',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Transaction Status',
                TYPE: 'api',
                TREE_ID: '204',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '603',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Refund',
                TYPE: 'api',
                TREE_ID: '205',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '604',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Callback Status',
                TYPE: 'api',
                TREE_ID: '206',
                POSITION: '5',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '605',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'Composite Pay',
            TYPE: 'branch',
            TREE_ID: '207',
            POSITION: '5',
            STATUS: 'active',
            CHILD_COUNT: '1',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Composite API',
                TYPE: 'api',
                TREE_ID: '208',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1204',
                LEVEL: '3',
              },
            ],
          },
        ],
      },
      {
        TAB_NAME: 'Accounts and Deposits',
        TYPE: 'root',
        TREE_ID: '209',
        POSITION: '4',
        STATUS: 'active',
        CHILD_COUNT: '7',
        API_ID: '1',
        LEVEL: '1',
        children: [
          {
            TAB_NAME: 'Fixed Deposit',
            TYPE: 'branch',
            TREE_ID: '210',
            POSITION: '1',
            STATUS: 'active',
            CHILD_COUNT: '4',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'FD Creation',
                TYPE: 'api',
                TREE_ID: '211',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '702',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'View FD Details',
                TYPE: 'api',
                TREE_ID: '212',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '703',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'FD Closure',
                TYPE: 'api',
                TREE_ID: '213',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '704',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Return on Investment',
                TYPE: 'api',
                TREE_ID: '214',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1123',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'Recurring Deposit',
            TYPE: 'branch',
            TREE_ID: '215',
            POSITION: '2',
            STATUS: 'active',
            CHILD_COUNT: '3',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'RD Creation',
                TYPE: 'api',
                TREE_ID: '216',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '705',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'View RD Details',
                TYPE: 'api',
                TREE_ID: '217',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '707',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'RD Closure',
                TYPE: 'api',
                TREE_ID: '218',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '706',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'Saving Account',
            TYPE: 'branch',
            TREE_ID: '219',
            POSITION: '3',
            STATUS: 'active',
            CHILD_COUNT: '7',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Create Saving Account',
                TYPE: 'api',
                TREE_ID: '220',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1115',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Mini Statement',
                TYPE: 'api',
                TREE_ID: '221',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '208',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Account Numbers',
                TYPE: 'api',
                TREE_ID: '222',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '214',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Check Balance',
                TYPE: 'api',
                TREE_ID: '223',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '209',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Debit Card Status',
                TYPE: 'api',
                TREE_ID: '224',
                POSITION: '5',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '212',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Block Debit Card',
                TYPE: 'api',
                TREE_ID: '225',
                POSITION: '6',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '210',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Unblock Debit Card',
                TYPE: 'api',
                TREE_ID: '226',
                POSITION: '7',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '211',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'Current Account',
            TYPE: 'branch',
            TREE_ID: '227',
            POSITION: '4',
            STATUS: 'active',
            CHILD_COUNT: '4',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Create Current Account',
                TYPE: 'api',
                TREE_ID: '228',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1116',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Convert Current Account to OD',
                TYPE: 'api',
                TREE_ID: '229',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1215',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Mini Statement',
                TYPE: 'api',
                TREE_ID: '230',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '208',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Get Account Numbers',
                TYPE: 'api',
                TREE_ID: '231',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '214',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'iWish',
            TYPE: 'branch',
            TREE_ID: '232',
            POSITION: '5',
            STATUS: 'active',
            CHILD_COUNT: '6',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Goal Creation',
                TYPE: 'api',
                TREE_ID: '233',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1009',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Adding Funds To A Goal',
                TYPE: 'api',
                TREE_ID: '234',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1014',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'View Goal Service (Merchant)',
                TYPE: 'api',
                TREE_ID: '235',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1010',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Editing Goals Details (Merchant)',
                TYPE: 'api',
                TREE_ID: '236',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1011',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Close Goal (Merchant)',
                TYPE: 'api',
                TREE_ID: '237',
                POSITION: '5',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1012',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'Account Aggregator',
            TYPE: 'branch',
            TREE_ID: '239',
            POSITION: '6',
            STATUS: 'active',
            CHILD_COUNT: '4',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'OTP Creation',
                TYPE: 'api',
                TREE_ID: '240',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1213',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'OTP Verification',
                TYPE: 'api',
                TREE_ID: '241',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1214',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Account Discover',
                TYPE: 'api',
                TREE_ID: '242',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1211',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Fetch Data',
                TYPE: 'api',
                TREE_ID: '243',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1212',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'Over Draft (OD)',
            TYPE: 'branch',
            TREE_ID: '244',
            POSITION: '7',
            STATUS: 'active',
            CHILD_COUNT: '2',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Guest Login',
                TYPE: 'api',
                TREE_ID: '245',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1217',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Over Draft Account Creation',
                TYPE: 'api',
                TREE_ID: '246',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1216',
                LEVEL: '3',
              },
            ],
          },
        ],
      },
      {
        TAB_NAME: 'Business Banking',
        TYPE: 'root',
        TREE_ID: '247',
        POSITION: '5',
        STATUS: 'active',
        CHILD_COUNT: '6',
        API_ID: '1',
        LEVEL: '1',
        children: [
          {
            TAB_NAME: 'Corporate Internet banking',
            TYPE: 'branch',
            TREE_ID: '248',
            POSITION: '1',
            STATUS: 'active',
            CHILD_COUNT: '3',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Manage Registration',
                TYPE: 'branch',
                TREE_ID: '249',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '4',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Registration',
                    TYPE: 'api',
                    TREE_ID: '250',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '708',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Registration Status',
                    TYPE: 'api',
                    TREE_ID: '251',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '709',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Registration Callback',
                    TYPE: 'api',
                    TREE_ID: '252',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '710',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'De-Registration',
                    TYPE: 'api',
                    TREE_ID: '253',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '711',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Transaction Management',
                TYPE: 'branch',
                TREE_ID: '254',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '10',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'OTP Creation For Transaction',
                    TYPE: 'api',
                    TREE_ID: '255',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '712',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Bene Validation',
                    TYPE: 'api',
                    TREE_ID: '264',
                    POSITION: '10',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '771',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Transaction',
                    TYPE: 'api',
                    TREE_ID: '256',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '713',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Transaction Status',
                    TYPE: 'api',
                    TREE_ID: '257',
                    POSITION: '3',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '714',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Transaction Callback',
                    TYPE: 'api',
                    TREE_ID: '258',
                    POSITION: '4',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '715',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Validate Registered Accounts',
                    TYPE: 'api',
                    TREE_ID: '259',
                    POSITION: '5',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '716',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Fetch Registered Mobile Number',
                    TYPE: 'api',
                    TREE_ID: '260',
                    POSITION: '6',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '717',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Account Balance Fetch',
                    TYPE: 'api',
                    TREE_ID: '261',
                    POSITION: '7',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '718',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Account Bank Statement',
                    TYPE: 'api',
                    TREE_ID: '262',
                    POSITION: '8',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '719',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Pagination',
                    TYPE: 'api',
                    TREE_ID: '263',
                    POSITION: '9',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '770',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Unsecured Overdraft',
                TYPE: 'branch',
                TREE_ID: '265',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '2',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'InstaOD Offer Check',
                    TYPE: 'api',
                    TREE_ID: '266',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '720',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Avail InstaOD Offer',
                    TYPE: 'api',
                    TREE_ID: '267',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '721',
                    LEVEL: '4',
                  },
                ],
              },
            ],
          },
          {
            TAB_NAME: 'Cash Deposit Machine',
            TYPE: 'branch',
            TREE_ID: '268',
            POSITION: '2',
            STATUS: 'active',
            CHILD_COUNT: '2',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'CDM Validation',
                TYPE: 'api',
                TREE_ID: '269',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1122',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'CDM Deposit',
                TYPE: 'api',
                TREE_ID: '270',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1121',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'CMS Payments',
            TYPE: 'branch',
            TREE_ID: '271',
            POSITION: '3',
            STATUS: 'active',
            CHILD_COUNT: '3',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'InstaPay (ICICI To ICICI Fund transfer)',
                TYPE: 'branch',
                TREE_ID: '272',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '1',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'InstaPay',
                    TYPE: 'api',
                    TREE_ID: '273',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '764',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'Multi Mode File upload',
                TYPE: 'branch',
                TREE_ID: '274',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '2',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Payment Upload',
                    TYPE: 'api',
                    TREE_ID: '275',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '761',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Reverse MIS',
                    TYPE: 'api',
                    TREE_ID: '276',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '762',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'InstaIMPS',
                TYPE: 'api',
                TREE_ID: '277',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1201',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'CMS Collections',
            TYPE: 'branch',
            TREE_ID: '278',
            POSITION: '4',
            STATUS: 'active',
            CHILD_COUNT: '2',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'iSurepay (Cash/Cheque/DD Deposit)',
                TYPE: 'branch',
                TREE_ID: '279',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '2',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'Validation Web Service',
                    TYPE: 'api',
                    TREE_ID: '280',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '1105',
                    LEVEL: '4',
                  },
                  {
                    TAB_NAME: 'Receipting Web Service',
                    TYPE: 'api',
                    TREE_ID: '281',
                    POSITION: '2',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '1106',
                    LEVEL: '4',
                  },
                ],
              },
              {
                TAB_NAME: 'eCollection (NEFT/ RTGS/ IMPS collection)',
                TYPE: 'branch',
                TREE_ID: '282',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '1',
                API_ID: '1',
                LEVEL: '3',
                children: [
                  {
                    TAB_NAME: 'eCollection MIS',
                    TYPE: 'api',
                    TREE_ID: '283',
                    POSITION: '1',
                    STATUS: 'active',
                    CHILD_COUNT: '0',
                    API_ID: '1107',
                    LEVEL: '4',
                  },
                ],
              },
            ],
          },
          {
            TAB_NAME: 'IMPS',
            TYPE: 'branch',
            TREE_ID: '284',
            POSITION: '5',
            STATUS: 'active',
            CHILD_COUNT: '7',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'P2P - Person to Person Fund Transfer',
                TYPE: 'api',
                TREE_ID: '285',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '765',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'P2A - Person to Account Fund Transfer',
                TYPE: 'api',
                TREE_ID: '286',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '766',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'IMPS MMID Inquiry',
                TYPE: 'api',
                TREE_ID: '287',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '767',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'IMPS Transaction Inquiry',
                TYPE: 'api',
                TREE_ID: '288',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '768',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'IMPS Transaction History',
                TYPE: 'api',
                TREE_ID: '289',
                POSITION: '5',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '769',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'IMPS Transaction Status',
                TYPE: 'api',
                TREE_ID: '290',
                POSITION: '6',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1205',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Fund Transfer',
                TYPE: 'api',
                TREE_ID: '291',
                POSITION: '7',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1218',
                LEVEL: '3',
              },
            ],
          },
        ],
      },
      {
        TAB_NAME: 'Trade Service',
        TYPE: 'root',
        TREE_ID: '292',
        POSITION: '6',
        STATUS: 'active',
        CHILD_COUNT: '2',
        API_ID: '1',
        LEVEL: '1',
        children: [
          {
            TAB_NAME: 'Outward Remittance',
            TYPE: 'branch',
            TREE_ID: '293',
            POSITION: '1',
            STATUS: 'active',
            CHILD_COUNT: '5',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Balance Inquiry',
                TYPE: 'api',
                TREE_ID: '294',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1120',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Account Inquiry',
                TYPE: 'api',
                TREE_ID: '295',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1119',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Transaction Inquiry',
                TYPE: 'api',
                TREE_ID: '296',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1118',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Transaction Order',
                TYPE: 'api',
                TREE_ID: '297',
                POSITION: '4',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1117',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Outward Remittance',
                TYPE: 'api',
                TREE_ID: '298',
                POSITION: '5',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1209',
                LEVEL: '3',
              },
            ],
          },
          {
            TAB_NAME: 'Bank Guarantee Verification(e-BG)',
            TYPE: 'branch',
            TREE_ID: '299',
            POSITION: '2',
            STATUS: 'active',
            CHILD_COUNT: '3',
            API_ID: '1',
            LEVEL: '2',
            children: [
              {
                TAB_NAME: 'Issuance details',
                TYPE: 'api',
                TREE_ID: '300',
                POSITION: '1',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1206',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Amendment details',
                TYPE: 'api',
                TREE_ID: '301',
                POSITION: '2',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1207',
                LEVEL: '3',
              },
              {
                TAB_NAME: 'Verify Bank Guarantee',
                TYPE: 'api',
                TREE_ID: '302',
                POSITION: '3',
                STATUS: 'active',
                CHILD_COUNT: '0',
                API_ID: '1208',
                LEVEL: '3',
              },
            ],
          },
        ],
      },
    ];

    // $(function() {
    //   $('.sideMenu>.nav-pills li.nav-link').unbind('click');

    //   $('.sideMenu>.nav-pills li.nav-link').click(function() {
    //     $(this)
    //       .siblings('.active')
    //       .removeClass('active');
    //     // $(this).siblings(".openDropdown").removeClass("openDropdown");
    //     // $(this).addClass("openDropdown");
    //     $(this).addClass('active');
    //   });

    //   console.log('length:' + $('.sideMenu>.nav-pills li.nav-link').length);

    //   // $(document).on('click', '.sideMenu>.nav-pills li.nav-link', function() {
    //   //   $(this)
    //   //     .siblings('.active')
    //   //     .removeClass('active');
    //   //   // $(this).siblings(".openDropdown").removeClass("openDropdown");
    //   //   // $(this).addClass("openDropdown");
    //   //   $(this).addClass('active');
    //   // });

    //   $('.sideMenu>.nav-pills>li.nav-link a').click(function() {
    //     $(this)
    //       .parent()
    //       .siblings('.openDropdown')
    //       .removeClass('openDropdown');
    //     $(this)
    //       .parent()
    //       .toggleClass('openDropdown');
    //   });

    //   // $(document).on('click', '.sideMenu>.nav-pills li.nav-link a', function() {
    //   //   // alert('a tag click');
    //   //   $(this)
    //   //     .parent()
    //   //     .siblings('.openDropdown')
    //   //     .removeClass('openDropdown');
    //   //   $(this)
    //   //     .parent()
    //   //     .toggleClass('openDropdown');
    //   // });

    //   $('.sideMenu .openDropdown.active').click(function() {
    //     $(this).toggleClass('openDropdown');
    //   });
    //   // $(document).on('click', '.sideMenu .openDropdown.active', function() {
    //   //   $(this).toggleClass('openDropdown');
    //   // });

    //   $('.sideMenu .nav-pills-first-level>li.nav-link').click(function() {
    //     $(this)
    //       .siblings('.active')
    //       .removeClass('active');
    //     $(this).addClass('active');
    //   });

    //   // $(document).on(
    //   //   'click',
    //   //   '.sideMenu .nav-pills-first-level>li.nav-link',
    //   //   function() {
    //   //     $(this)
    //   //       .siblings('.active')
    //   //       .removeClass('active');
    //   //     $(this).addClass('active');
    //   //   },
    //   // );

    //   $('.sideMenu .nav-pills-first-level>li.nav-link a').click(function() {
    //     $(this).removeClass('active show');
    //   });
    //   // $(document).on(
    //   //   'click',
    //   //   '.sideMenu .nav-pills-first-level>li.nav-link a',
    //   //   function() {
    //   //     $(this).removeClass('active show');
    //   //   },
    //   // );

    //   $('.sideMenu .nav-pills-second-level>li.nav-link').click(function() {
    //     $(this).toggleClass('openDropdown');
    //     $(this).addClass('active');
    //     $(this)
    //       .siblings('.openDropdown')
    //       .removeClass('openDropdown active');
    //   });
    //   // $(document).on(
    //   //   'click',
    //   //   '.sideMenu .nav-pills-second-level>li.nav-link',
    //   //   function() {
    //   //     $(this).toggleClass('openDropdown');
    //   //     $(this).addClass('active');
    //   //     $(this)
    //   //       .siblings('.openDropdown')
    //   //       .removeClass('openDropdown active');
    //   //   },
    //   // );

    //   $('.sideMenu .nav-pills-second-level>li.nav-link a').click(function() {
    //     $(this).removeClass('active show');
    //   });
    //   // $(document).on(
    //   //   'click',
    //   //   '.sideMenu .nav-pills-second-level>li.nav-link a',
    //   //   function() {
    //   //     $(this).removeClass('active show');
    //   //   },
    //   // );

    //   //for static data
    //   // $('.tree-node').click(function() {
    //   //   alert('click');
    //   //   var selectedId = $(this).attr('role');
    //   //   this.nodeId = selectedId.split('_').pop();
    //   //   var nodeType = selectedId.split('_', 2).pop();
    //   //   self.AppId(this.nodeId, nodeType);
    //   // });

    //   $(document).on('click', '.tree-node', function(e) {
    //     alert($('ul').length);
    //     var selectedId = $(this).attr('role');
    //     this.nodeId = selectedId.split('_').pop();
    //     var nodeType = selectedId.split('_', 2).pop();
    //     self.AppId(this.nodeId, nodeType);
    //   });
    // });

    //api for get tree data
    this.dashboardService.getTreeData().subscribe((data: any) => {
      this.responseData = JSON.parse(data._body);
      this.menuArray = this.getMenuData(this.responseData);
    });
  }

  async assignClickToNodes() {
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

    // $(document).on('click', '.tree-node', function(e) {
    //   var selectedId = $(this).attr('role');
    //   this.nodeId = selectedId.split('_').pop();
    //   var nodeType = selectedId.split('_', 2).pop();
    //   self.AppId(this.nodeId, nodeType);
    // });
    //for static data
    $('.tree-node').click(function() {
      //alert('click');
      var selectedId = $(this).attr('role');
      this.nodeId = selectedId.split('_').pop();
      var nodeType = selectedId.split('_', 2).pop();
      self.AppId(this.nodeId, nodeType);
    });
  }

  getMenuTree() {
    this.dashboardService.getMenuTreeData().subscribe((data: any) => {
      this.treeData = JSON.parse(data._body);
    });
  }

  createTree() {
    this.treeItems =
      `<li class="nav-link active">` +
      `<a id="v-pills-home-tab" data-toggle="pill"  href="#/documentation" role="tab" aria-controls="v-pills-home" aria-selected="true">Introduction` +
      `</a>` +
      `</li>`;

    for (var i = 0; i < this.treeData.length; i++) {
      if (this.treeData[i].CHILD_COUNT !== '0') {
        this.treeItems +=
          `<li class="nav-link">` +
          `<a id="v-pills-messages-tab" class="tree-node" data-toggle="pill"  role="tab_${this.treeData[i].TYPE}_${this.treeData[i].API_ID}" aria-controls="v-pills-home" aria-selected="true">` +
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
          `</a>` +
          `</span>`;
      }

      this.treeItems = this.treeItems + `</li>`;
    }
    this.treeItems += `<li class="nav-link viewAllLink">
        <a id="v-view-all-tab" data-toggle="pill"  href="#/viewallapi" role="tab" aria-controls="v-view-all" aria-selected="true">
          <div class="viewAllIcon">
            <i class="material-icons">dashboard</i>
          </div>
          VIEW ALL APIs
          <img
            class="viewAllDropdownActive"
            src="assets/images/dropdown-3.svg"
            alt=""
          />
          <img
            class="viewAllDropdown"
            src="assets/images/dropdown-viewall.svg"
            alt=""
          />
        </a>
      </li>`;

    this.assignClickToNodes();
    return this.treeItems;
  }

  createUnorderedList(childrenArr, nodeType, level) {
    console.log(level);
    // if (nodeType === 'root') {
    //   this.treeItems += `<ul
    //   class="collapse nav-pills-first-level submenuLevelOne list-unstyled"
    // >`;
    // }
    // if (nodeType === 'branch') {
    //   this.treeItems += `<ul
    //   class="collapse nav-pills-first-level submenuLevelTwo list-unstyled"
    // >`;
    // }

    if (level === '1') {
      console.log(level);
      this.treeItems += `<ul
      class="collapse nav-pills-first-level submenuLevelOne list-unstyled"
    >`;
    }
    if (level === '2') {
      this.treeItems += `<ul
      class="collapse nav-pills-first-level submenuLevelTwo list-unstyled"
    >`;
    }
    if (level >= 3) {
      this.treeItems += `<ul
      class="collapse nav-pills-first-level submenuLevelThree list-unstyled"
    >`;
    }

    for (var i = 0; i < childrenArr.length; i++) {
      if (childrenArr[i].CHILD_COUNT !== '0') {
        this.treeItems +=
          `<li class="nav-link">` +
          `<a id="v-pills-messages-tab" class="tree-node" data-toggle="pill" role="tab_${childrenArr[i].TYPE}_${childrenArr[i].API_ID}" aria-controls="v-pills-home" aria-selected="true">` +
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
          `<li class="nav-link">` +
          `<a id="v-pills-messages-tab" class="tree-node" data-toggle="pill" role="tab_${childrenArr[i].TYPE}_${childrenArr[i].API_ID}" aria-controls="v-pills-home" aria-selected="true">` +
          `${childrenArr[i].TAB_NAME}` +
          `</a>`;
      }

      // if (childrenArr[i].CHILD_COUNT !== '0') {
      //   this.createUnorderedList(
      //     childrenArr[i].children,
      //     childrenArr[i].TYPE,
      //     this.levels,
      //   );
      // }
      this.treeItems += `</li>`;
    }
    this.treeItems += `</ul>`;
  }

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

  AppId(num: any, nodeType: any) {
    localStorage.setItem('nodeId', num);
    //localStorage.setItem('nodeType', nodeType);
    if (nodeType === 'api') {
      this.router.navigate(['/apidetails/', num]);
    }
    if (nodeType === 'branch' || nodeType === 'root') {
    }
  }

  scroll_view(id) {
    this.router.navigate(['index']);
    setTimeout(function() {
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }
}
