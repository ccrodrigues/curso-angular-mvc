import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isMostrarMenu = true;

  onMostrarMenu(){
    this.isMostrarMenu = !this.isMostrarMenu;
  }
}
