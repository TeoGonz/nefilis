import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  @Input() title: string = "";
  @Input() sinopsis: any;
  @Input() trailer: any;
  @Input() portada: string = "";
}
