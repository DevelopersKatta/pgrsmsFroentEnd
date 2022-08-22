import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { StorageServiceModule } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  
  loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
    // this._http.post("http://localhost:8080/users", this.loginForm.value).subscribe(res=>{
    //   // const user = res.find()
    //   this.router.navigate(['user-dashboard'])
    //   console.log(res) 
    // },  err=>{
    //   alert("invalid details")
    // })
    // console.log(this.loginForm.value);
    localStorage.setItem('mahi', 'hello')
  }
  


}