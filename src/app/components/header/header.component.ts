import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLargeScreen: boolean = window.innerWidth >= 768;

  constructor(private menuCtrl: MenuController) { }

  ngOnInit(): void {
  }

  closeMenu() {
    this.menuCtrl.close();
  }

}
