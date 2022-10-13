import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  
   

  acno=''
  pass=''
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  login(){
    var acno = this.acno
    var pass = this.pass
    const result=this.ds.login(acno,pass)
    if(result){
      
      
      this.router.navigateByUrl('dashboard')
    }else{
      
    }
    
  }
}
