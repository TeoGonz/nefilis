import { Component, Input, Output,EventEmitter } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})



export class SidebarComponent {

  isExpanded = false;


  sendForm(event:string){
    console.log("hola mundo")
    if(event == "true"){
      
      this.isExpanded = true;
      localStorage.setItem("menu", "true")
    } else {
      this.isExpanded = false;
      localStorage.setItem("menu", "false")
    }
  }

  ngOnInit() {
      if(localStorage.getItem("menu") == "true"){
          this.isExpanded = true;
      } else {
        this.isExpanded = false;
      }
  }
}
