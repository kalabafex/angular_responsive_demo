import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  showMenu=false;
  innerWidth = window.innerWidth;
  toggleMenu():void{
    this.showMenu=!this.showMenu;
  }
  @HostListener('window:resize', ['$event'])
onResize() {
  this.innerWidth = window.innerWidth;
}
}

