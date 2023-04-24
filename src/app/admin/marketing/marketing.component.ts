import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  public employeeInfo: Array<any> = [
    { name: 'Marian Lee', job: 'Directora jefa de marketing', img: '../../../assets/img/components/marketing/1.png' },
  ];

  constructor() {
    console.log(this.employeeInfo);
  }

  ngOnInit() {
  }

}
