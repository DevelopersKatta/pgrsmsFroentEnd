import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  // http: any;

  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[''],
      number:[''],
      email:[''],
      address:[''],
      city:[''],
      password:['']
    })
  }

  saveData(details: {name: string, number: string, email: string, address: string, city : string, password: string,}){
    console.log(details)
    // this._http.post<any>("http://localhost:8080/user", this.details.value).sub
    // alert(details);
  }
  signup(){
    this._http.post<any>("http://localhost:8080/users", this.signupForm.value).subscribe(res=>{
      alert("seccess")
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err=>{
      alert("Server Error")
      this.router.navigate(['error-500'])
    })
  }



  

}
