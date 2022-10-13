import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser :any
  currentAcno : any
  userDetails:any ={
    1000:{acno:1000,username:"sayis",password:123,balance:10000,transactions:[]},
    1001:{acno:1001,username:"sinan",password:123,balance:1000,transactions:[]},
    1002:{acno:1002,username:"fasil",password:123,balance:3000 ,transactions:[]},
    1003:{acno:1003,username:"noufal",password:123,balance:4000,transactions:[]}
  }
  constructor() { }
  register(acno:any,username:any,password:any){
    let userDetails = this.userDetails
    if(acno in userDetails){
      return false    // logic mathram ivede cheyyunollu  return cheyyandath true or false aan
    }else{
      userDetails[acno]={acno,username,password,balance:0} //key yum value yum same aanankil oru pravashyam kodutham mathi 
      console.log(userDetails);
      
      return true
    }
  }

  login(acno:any,password:any){
    
    var userDetails = this.userDetails
    if(acno in userDetails){
      if(password == userDetails[acno]['password']){
        this.currentUser = userDetails[acno]['username']
        this.currentAcno = acno
        return true
      }else{
        alert("Incorrect Password")
        return false
      }
    }else{
      alert('Invalued Username')
      return false 
    }
  }
  deposite(acno:any,password:any,amount:any){
    let userDetails = this.userDetails
     amount = parseInt(amount)   //convert string type input value to integer Number 
    if(acno in userDetails){
      if(password==userDetails[acno]['password']){
        userDetails[acno]['balance']+=amount
        userDetails[acno]['transactions'].push({type:'CREDIT',amount})
        return userDetails[acno]['balance']   //return last total balance 
      }else{
        alert("Incorrect Password")
        return false
      }
    }else{
      alert('Incorrect Account NUmber')
      return false
    }
  }
  withdraw(acno:any,password:any,amount:any){
    var userDetails=this.userDetails
    amount = parseInt(amount)
    if(acno in this.userDetails){
      if(password== userDetails[acno]['password']){
        if(amount <= userDetails[acno]['balance']){
          userDetails[acno]['balance']-=amount
          userDetails[acno]['transactions'].push({type:'DEBIT',amount})

          return userDetails[acno]['balance']
        }else{
          alert('Inffecint Balance')
          return false
        }
      }else{
        alert('Incorrect Password')
        return false
      }
    }else{
      alert("Incorrect Account Number")
      return false
    }
    
  }
  getTransaction(acno:any){  // to get all transaction in a current account 
    return this.userDetails[acno]['transactions']
  }
}
