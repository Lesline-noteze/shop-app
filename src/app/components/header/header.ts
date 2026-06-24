import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  logo='assets/products/logo.png';
  menuOpen= false;
  toggleMenu() {
    this.menuOpen=!this.menuOpen;
  }
}
