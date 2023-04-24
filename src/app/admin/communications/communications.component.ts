import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.scss']
})
export class CommunicationsComponent implements OnInit {

  public employeeInfo: Array<any> = [
    { name: 'Rachel Whetstone', job: 'Directora jefe de comunicaciones', img: '../../../assets/img/components/communications/1.png' },
  ];

  constructor() {
    console.log(this.employeeInfo);
  }

  ngOnInit() {
  }

}
