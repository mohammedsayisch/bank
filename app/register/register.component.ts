import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname = ''
  acno=''
  pass = ''
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var uname = this.uname
    var acno = this.acno
    var pass = this.pass
    const result = this.ds.register(acno,uname,pass)
    if(result){
      alert("Registerd")
      this.router.navigateByUrl('')
    }else{
      alert("User Already Exist")
    }
    // alert("Register Success")
    
  }

}
