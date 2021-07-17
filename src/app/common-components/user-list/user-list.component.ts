import { Component, Input, OnInit } from '@angular/core';
import { UserPublicInfo } from '../../models/user/UserPublicInfo';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() userType: string = "client";
  @Input() users: UserPublicInfo[];
  constructor(public userService: UserService) { }
  counter(i: number) {
    return new Array(i);
  }
  ngOnInit(): void {
    this.userService.getUsers(10).subscribe(data => {
      console.log(data);

      let usersJson = data;
      let usersInfo: UserPublicInfo[] = [];
      let userInfo: UserPublicInfo;
      usersJson.results.forEach(user => {
        userInfo = { firstName: user.name.first, lastName: user.name.last, email: user.email, phone: user.phone, gender: user.gender, picture: user.picture.large };

        usersInfo.push(userInfo);
      });
      this.users = usersInfo;

    });
  }


}
