import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-judicial',
  templateUrl: './judicial.component.html',
  styleUrls: ['./judicial.component.scss']
})
export class JudicialComponent implements OnInit {

  public employeeInfo: Array<any> = [
    { name: 'David Hyman', job: 'Director del departamento jurídico', img: '../../../assets/img/components/judicial/1.png' },
    { name: 'Bryony Gagan', job: 'Vicepresidenta del departamento jurídico-empresarial', img: '../../../assets/img/components/judicial/2.png' },
    { name: 'David Hyman', job: 'Vice presidente de políticas publicas', img: '../../../assets/img/components/judicial/3.png' },
    { name: 'Verna Myers', job: 'Vicepresidenta de estrategia de inclusión', img: '../../../assets/img/components/judicial/4.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
