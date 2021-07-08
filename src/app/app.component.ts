import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'physio';
  constructor(private translate: TranslateService) {
    this.setAppLenguage();
  }

  setAppLenguage() {
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang());
  }
}
