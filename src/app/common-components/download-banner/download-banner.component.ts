import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-banner',
  templateUrl: './download-banner.component.html',
  styleUrls: ['./download-banner.component.scss']
})
export class DownloadBannerComponent implements OnInit {

  constructor() { }
  installEvent: any = null;
  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    console.log(event);
    event.preventDefault();
    this.installEvent = event;
  }
  ngOnInit(): void {
  }
  installApp() {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice.then((rta: any) => { console.log(rta); });
    }
  }

}
