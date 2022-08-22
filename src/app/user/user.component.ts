import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginCheck(){
    const username = localStorage.getItem('username')
    localStorage.getItem('userRole')
    if(username != null){
      this.router.navigate(['user-dashboard'])
    }else{
      this.router.navigate(['user-login'])
    }
  }

}
