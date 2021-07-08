import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { faChartBar, faUsers, faBell, faCog, faAngleDown, faHome } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-client-sidebar',
  templateUrl: './client-sidebar.component.html',
  styleUrls: ['./client-sidebar.component.scss', '../sidebar/sidebar.component.scss']
})
export class ClientSidebarComponent extends SidebarComponent implements OnInit {

  faUsers = faUsers;
  faChartBar = faChartBar;
  faBell = faBell;
  faCog = faCog;
  faAngleDown = faAngleDown;
  faHome = faHome;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }




}
