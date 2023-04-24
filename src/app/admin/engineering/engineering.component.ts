import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.scss']
})
export class EngineeringComponent implements OnInit {

  public employeeInfo: Array<any> = [
    { name: 'Debora Black', job: 'Vicepresidenta de ingeniería', img: '../../../assets/img/components/engineering/1.png' },
    { name: 'Tom Mack', job: 'Manager de ingeniería', img: '../../../assets/img/components/engineering/2.png' },
    { name: 'CJ Barker', job: 'Director de ingeniería', img: '../../../assets/img/components/engineering/3.png' },
    { name: 'Steve Urban', job: 'Lider de ingeniería', img: '../../../assets/img/components/engineering/4.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
