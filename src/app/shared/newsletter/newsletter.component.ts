import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  public showLoad = true;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Nefilis - NewsLetter');
  }

  iframeLoadDone() {
    this.showLoad = false;
  }
}
