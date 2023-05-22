import { Component } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public isOpen;

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
  urlVideo: any;
  titulo: string = ""

  public form: any = {
    titulo: "",
    portada: "",
    trailer: "",
    sinopsis: ""
  }

  constructor(private titleService: Title, private _sanitizer: DomSanitizer) {
    this.isOpen = false;
  }

  sendForm() {
    this.movies = String(localStorage.getItem('new_movies'))
    if (!this.movies) {
      this.movies = `${this.form.titulo}|${this.form.portada}|${this.form.trailer}|${this.form.sinopsis}+`
    } else {
      this.movies += `${this.form.titulo}|${this.form.portada}|${this.form.trailer}|${this.form.sinopsis}+`
    }
    this.isOpen = false;

    localStorage.setItem('new_movies', this.movies)
    this.getMovies();
  }

  seeTrailer(url: string) {
    this.urlVideo = url;
  }

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

  ngOnInit() {
    this.titleService.setTitle('Nefilis - Gestor de contenidos');
    this.getMovies();
    console.log(this.moviesPreview)
  }

}
