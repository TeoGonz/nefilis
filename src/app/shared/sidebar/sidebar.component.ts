import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})



export class SidebarComponent {

  public navElements: Array<any> = [
    { title: 'CEO & Fundador', icon: 'fs-4 bi-person', route: 'admin/founders' },
    { title: 'Ingeniería', icon: 'fs-4 bi-gear-fill', route: 'admin/engineering' },
    { title: 'Planeación', icon: 'fs-4 bi-calendar-check', route: 'admin/planning' },
    { title: 'Contenidos', icon: 'fs-4 bi-tv', route: 'admin/contents' },
    { title: 'Finanzas', icon: 'fs-4 bi-cash', route: 'admin/finance' },
    { title: 'Comunicaciones', icon: 'fs-4 bi-soundwave', route: 'admin/communications' },
    { title: 'Judicial', icon: 'fs-4 bi-briefcase', route: 'admin/judicial' },
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
