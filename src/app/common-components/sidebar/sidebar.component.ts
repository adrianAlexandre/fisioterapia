import { Component, Input, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;

  @Input() userType: string = '';

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.userType);

  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    let element: HTMLElement = window.document.getElementById("mySidenav")!;
    element.style.left = '-425px';

  }

  openDropDown(dropdownId: string, iconId: string) {
    let dropdown: HTMLElement = window.document.getElementById(dropdownId)!;
    let icon: HTMLElement = document.getElementById(iconId)!;
    icon.classList.toggle("down");

    if (dropdown.style.height == 'auto') {
      dropdown.style.height = '0px';
      dropdown.style.padding = '0px';
    } else {
      dropdown.style.height = 'auto';
      dropdown.style.paddingBottom = '10px';
    }


  }
}
