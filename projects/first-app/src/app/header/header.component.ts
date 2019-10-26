import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayMenu = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu(e: Event){
    this.displayMenu = !this.displayMenu;
    e.stopPropagation();
  }

  @HostListener('document:mousedown', ['$event'])
  handleClick(e){
    e;
    if(this.displayMenu){
      this.displayMenu = false;
    }
  }
  

}
