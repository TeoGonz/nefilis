import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})



export class SidebarComponent {

  public navElements: Array<any> = [
    { title: 'CEO & Fundador', icon: 'fs-4 bi-person', route: 'admin/founders' },
    { title: 'Ingeniería', icon: 'fs-4 bi-gear-fill', route: '#' },
    { title: 'Planeación', icon: 'fs-4 bi-calendar-check', route: '#' },
    { title: 'Contenidos', icon: 'fs-4 bi-tv', route: '#' },
    { title: 'Finanzas', icon: 'fs-4 bi-cash', route: '#' },
    { title: 'Comunicaciones', icon: 'fs-4 bi-soundwave', route: '#' },
    { title: 'Recursos humanos', icon: 'fs-4 bi-people', route: '#' },
    { title: 'Marketing', icon: 'fs-4 bi-newspaper', route: '#' }
  ]

  isExpanded = false;


  sendForm(event: string) {
    console.log("hola mundo")
    if (event == "true") {

      this.isExpanded = true;
      localStorage.setItem("menu", "true")
    } else {
      this.isExpanded = false;
      localStorage.setItem("menu", "false")
    }
  }

  ngOnInit() {
    if (localStorage.getItem("menu") == "true") {
      this.isExpanded = true;
    } else {
      this.isExpanded = false;
    }
  }
}
