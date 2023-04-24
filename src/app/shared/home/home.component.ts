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

  public  information  = [
    {
      title: "CEO & Fundador",
      enviroment: [ "Fundador Reed Hastings","Co-Ceo Ted Sarandos","Co-Ceo Greg Peters"],
      description: [`Es un papel decisivo en la definición de la empresa, como formalizar la cultura de trabajo de Netflix en torno a los principios de "libertad y responsabilidad".
    También guió a Netflix a través de grandes cambios estratégicos, incluida la transición de un negocio de DVD por correo al streaming, el impulso hacia la programación original y la expansión global.`],
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
