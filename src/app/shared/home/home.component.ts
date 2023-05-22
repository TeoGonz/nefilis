import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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


  movies: string = ""
  preview: string = ""
  previewSlice: any;
  moviesPreview: any;
  urlVideo: string = ""

  getMovies() {
    var moviesSlice: any = []
    this.preview = String(localStorage.getItem('new_movies'))
    this.previewSlice = this.preview.split('+');
    this.previewSlice.forEach(function (value: any) {
      var slice = value.split('|')
      if (slice[0]) { moviesSlice.push(slice) }

    });
    this.moviesPreview = moviesSlice;
  }


  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Nefilis - Home');
    this.getMovies();
  }

}
