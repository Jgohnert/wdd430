import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  standalone: false,
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent implements OnInit {
  users!: string[];

  constructor(private userService: UserService) {}
  
    ngOnInit() {
      this.users = this.userService.activeUsers;
    }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
