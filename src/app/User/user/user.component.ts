import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service'; //app/Service/user.service

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    private router: Router,
    private service: UserService
  ) {}

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    const requestPayload = {
      fields: [
        {
          element_name: 'first_name',
          value: form.value.first_name,
        },
        
        {
          element_name: 'last_name',
          value: form.value.last_name,
        },
        {
          element_name: 'phone',
          value: form.value.phone,
        },
      ],
    };
    console.log('requestPayload =>', requestPayload);

    this.service.createUser(requestPayload).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onBack() {
    this.router.navigate(['/']);
  }
}
