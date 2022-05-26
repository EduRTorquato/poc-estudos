
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private routes: Router) { }

  login: FormGroup;

  ngOnInit(): void {
    this.login = new FormGroup({
      username: new FormControl((''), [Validators.required, Validators.maxLength(20)]),
      password: new FormControl((''), [Validators.required, Validators.maxLength(10)]),
    })
  }

  

  validate(){

    this.login.reset();
    this.routes.navigate(['escola']); 
  }

  
}
