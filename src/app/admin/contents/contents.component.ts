import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  public employeeInfo: Array<any> = [
    { name: 'Bela Bajaria', job: 'Directora jefa', img: '../../../assets/img/components/contents/1.png' },
    { name: 'Maria Ferreras', job: 'Directora global de colaboraciones', img: '../../../assets/img/components/contents/2.png' },
    { name: 'Amy Reinhard', job: 'Vicepresidenta de operaciones de estudio', img: '../../../assets/img/components/contents/3.png' },
    { name: 'Scott Stuber', job: 'Director de películas de Netflix', img: '../../../assets/img/components/contents/4.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
