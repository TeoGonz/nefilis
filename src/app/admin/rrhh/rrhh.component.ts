import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rrhh',
  templateUrl: './rrhh.component.html',
  styleUrls: ['./rrhh.component.scss']
})
export class RrhhComponent implements OnInit {

  public employeeInfo: Array<any> = [
    { name: 'Sergio Ezama', job: 'Director jefe de talento humano', img: '../../../assets/img/components/rrhh/1.png' },
  ];

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Nefilis - RRHH');
  }

}
