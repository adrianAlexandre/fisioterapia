import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() userType: string = "client";
  constructor() { }
  counter(i: number) {
    return new Array(i);
  }
  ngOnInit(): void {
  }

}
