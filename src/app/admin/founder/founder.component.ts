import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-founder',
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.scss']
})
export class FounderComponent implements OnInit {

  public employeeInfo: Array<any> = [
    { name: 'Red Hastings', job: 'Fundador', img: '../../../assets/img/components/ceo-founders/1.png' },
    { name: 'Ted Sarados', job: 'Co-Ceo', img: '../../../assets/img/components/ceo-founders/2.png' },
    { name: 'Greg Peters', job: 'Co-Ceo', img: '../../../assets/img/components/ceo-founders/3.png' }
  ];

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Nefilis - Ceo & Fundador');
  }

}
