import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhysioComponent } from './client/physio/physio.component';
import { HeaderComponent } from './common-components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { ClientSidebarComponent } from './common-components/client-sidebar/client-sidebar.component';
import { SidebarComponent } from './common-components/sidebar/sidebar.component';
import { ProfessionalSidebarComponent } from './common-components/professional-sidebar/professional-sidebar.component';
import { DownloadBannerComponent } from './common-components/download-banner/download-banner.component';
import { UserListComponent } from './common-components/user-list/user-list.component';
import { UserDetailsComponent } from './common-components/user-details/user-details.component';
import { PhysioPanelComponent } from './client/physio-panel/physio-panel.component';
import { DailyTestPanelComponent } from './client/physio-panel/daily-test-panel/daily-test-panel.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './common-components/chart/chart.component';
import { MedicalHistoryListComponent } from './client/physio-panel/medical-history-list/medical-history-list.component';
import { DragScrollModule } from 'ngx-drag-scroll';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    PhysioComponent,
    HeaderComponent,
    ClientSidebarComponent,
    SidebarComponent,
    ProfessionalSidebarComponent,
    DownloadBannerComponent,
    UserListComponent,
    UserDetailsComponent,
    PhysioPanelComponent,
    DailyTestPanelComponent,
    ChartComponent,
    MedicalHistoryListComponent
  ],
  imports: [
    FormsModule,
    ChartsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FontAwesomeModule,
    DragScrollModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
