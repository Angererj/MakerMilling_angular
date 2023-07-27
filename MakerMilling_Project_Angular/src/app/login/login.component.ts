
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {UserObject} from "../model/user";
import {DatatableService} from "../service/datatable.service";
import {setUserAuthenticated} from "../../environments/enviroments";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
  regForm: FormGroup  = new FormGroup({
    'username': new FormControl(null),
    'password': new FormControl(null)
  },);
   errormsg = "";
  constructor(private userService: UserService) {
}
  ngOnInit(){
    setUserAuthenticated(false)
  }

  onSubmit(){
    let user: UserObject = Object.assign({},this.regForm?.value)
    this.userService.checkUser(user)
    this.userService.errorMsgSubject.subscribe(data=>{
        this.errormsg = data
    })
  }
}
