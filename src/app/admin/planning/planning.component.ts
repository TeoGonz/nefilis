import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  public employeeInfo: Array<any> = [
    { name: 'Pablo Pérez Rosso', job: 'Vicepresidente de estrategía, planeación y análisis', img: '../../../assets/img/components/planning/1.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
