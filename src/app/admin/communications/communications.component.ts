import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.scss']
})
export class CommunicationsComponent implements OnInit {

  public employeeInfo: Array<any> = [
    { name: 'Rachel Whetstone', job: 'Directora jefe de comunicaciones', img: '../../../assets/img/components/communications/1.png' },
  ];

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    console.log(this.employeeInfo);
    this.titleService.setTitle('Nefilis - Comunicaciones');
  }

}
