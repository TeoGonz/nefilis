import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrhh',
  templateUrl: './rrhh.component.html',
  styleUrls: ['./rrhh.component.scss']
})
export class RrhhComponent implements OnInit {

  public employeeInfo: Array<any> = [
    { name: 'Sergio Ezama', job: 'Director jefe de talento humano', img: '../../../assets/img/components/rrhh/1.png' },
  ];

  constructor() {
    console.log(this.employeeInfo);
  }

  ngOnInit() {
  }

}
