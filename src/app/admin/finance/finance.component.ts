import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  public employeeInfo: Array<any> = [
    { name: 'Spancer Neumann', job: 'Director jefe del departamento financiero', img: '../../../assets/img/components/finance/1.png' },
    { name: 'Spencer Wang', job: 'Vicepresidente de finanzas, relaciones con inversiones y desarrollo empresarial', img: '../../../assets/img/components/finance/2.png' },
  ];

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Nefilis - Finanzas');
  }

}
