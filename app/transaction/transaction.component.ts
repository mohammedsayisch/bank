import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  acno:any
  transactionResult:any
  constructor(private router:Router,private ds:DataService) {
      this.acno = this.ds.currentAcno
      this.transactionResult = this.ds.getTransaction(this.acno)
      console.log(this.transactionResult);
      
  }

  ngOnInit(): void {
  }

    backtoHome(){
      this.router.navigateByUrl('dashboard')
    }

}
