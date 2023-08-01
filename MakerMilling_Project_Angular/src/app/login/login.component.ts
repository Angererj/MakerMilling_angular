import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../service/user.service";
import {UserObject} from "../model/user";
import {setUserAuthenticated} from "../../environments/environments";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  //implement formgroup with fields username and password - both required
  regForm: FormGroup = new FormGroup({
    'username': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required)
  });

  //errormessage
  errormsg = "";

  //get userservice in constructor
  constructor(private userService: UserService) {
  }

  //set userauthenticated to false as default
  ngOnInit() {
    setUserAuthenticated(false)
  }

  //call userservice with values of form input to authenticate user and check if valid credentials
  onSubmit() {
    let user: UserObject = Object.assign({}, this.regForm?.value)
    this.userService.checkUser(user)
    //get errormessage if returned
    this.userService.errorMsgSubject.subscribe(data => {
      this.errormsg = data
    })
  }
}
