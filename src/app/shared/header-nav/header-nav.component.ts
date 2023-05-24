import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  @Input() public loginAccess: boolean = false;

  public componentSettings = {
    buttons: {
      language: "Idioma"
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
