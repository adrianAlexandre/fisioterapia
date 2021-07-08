import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() fullName?: string;
  @Input() job?: string;
  @Input() email?: string;
  @Input() photo?: string;


  constructor() { }

  ngOnInit(): void {
  }

}
