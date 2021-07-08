import { Component, HostListener, OnInit } from '@angular/core';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars
  installEvent: any = null;
  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    console.log(event);
    event.preventDefault();
    this.installEvent = event;
  }

  installApp() {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice.then((rta: any) => { console.log(rta); });
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  /* Set the width of the side navigation to 250px */
  openNav() {
    let element: HTMLElement = window.document.getElementById("mySidenav")!;
    if (screen.width <= 425) {
      element.style.width = '100%';
      element.style.left = '0';
    } else {
      element.style.width = '425px';
      element.style.left = '0';

    }
  }

}
