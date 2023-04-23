import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public bannerPhrases = {
    welcome: "Películas ilimitadas, shows de tv y más.",
    promo: "Mira lo que quieras, cancela cuando quieras."
  };

  public componentSettings = {
    buttons: {
      language: "Idioma"
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
