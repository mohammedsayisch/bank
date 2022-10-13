import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = ''

  acno=""
  pass=""
  amount=""
  
  acno1=""
  pass1=""
  amount1=""

  constructor(private ds:DataService) {
    this.user = this.ds.currentUser
   }

  ngOnInit(): void {
  }
  deposite(){
    var acno = this.acno
    var pass = this.pass
    var amount = this.amount
    const result = this.ds.deposite(acno,pass,amount)
    if(result){
      alert(`${amount} is Credited , Your Account Balance is ${result}`)
    }
    
  }
  withdraw(){
    var acno = this.acno1
    var pass = this.pass1
    var amount = this.amount1
    const result = this.ds.withdraw(acno,pass,amount)
    if(result){
      alert(`${amount} is Debited , Your Account Balance is ${result}`)
    }
  }

}
