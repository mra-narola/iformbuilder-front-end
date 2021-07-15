import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users = [];
  constructor(private service: UserService, private router: Router) { }
  token = localStorage.getItem('Token')
  ngOnInit(): void {
    
   this.getUserData()
  }
  getUserData() {
    this.service.getUserData().subscribe(
      (res: any) => {
        this.users = res.data;
      },
      (err) => {
      }
    );
  }

  onAddUser() {
    this.router.navigate(['add-new-user']);
  }
}
