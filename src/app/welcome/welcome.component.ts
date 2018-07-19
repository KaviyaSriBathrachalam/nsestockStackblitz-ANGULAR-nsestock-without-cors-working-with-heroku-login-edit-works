

import { Component ,ViewChild} from '@angular/core';
import { Nsestock } from './nsestock';
import { Observable } from 'rxjs';
import { NsestockService } from './nsestock.service';

import { filter } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
// import "rxjs/add/operator/distinct";
import { Portfolio, Portfolio1, Saample } from './portfolio';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router, NavigationExtras } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource,MatIconModule } from '@angular/material';
@Component({
  selector: 'my-app',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
    displayedColumns = ['Check','Index','position', 'firstName'];
   @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
dataSource = new MatTableDataSource();
listofportfolio:Portfolio[]=[]; 
  vall: Nsestock[] = [];
  userid:string;
  category: String;
  catNames = ["nifty", "cnxInfra", "juniorNifty", "nseliquid", "niftyMidcap50", "cnxit",
    "bankNifty", "cnxRealty", "cnxEnergy", "cnxFMCG", "cnxMNC", "ni15", "nv20",
    "cnxPharma", "cnxPSE", "cnxPSU", "cnxService", "etf", "iL", "goldEtf", "nifty50Etf", "cbmSecList", "cnxCommodities", "cnxConsumption", "cpse", "cnxFinance",
    "cnxAuto", "cnxDividendOppt", "cnxMedia", "cnxMetal", "niftyMidcapLiq15", "niftyPvtBank", "sovGold", "nifty50EqualWeight", "niftyAlpha50"];
  portfolio: Portfolio[] = [];
  myportfolio: Portfolio[] = [];
  uniqueindex: String[] = [];
  samplearr: Saample[] = [];
  sendone: Portfolio;
  constructor(public nsestockService: NsestockService, private myRoute: Router) { }
  // ngOnInit() { 
  //     Observable.interval(3000)
  //     .subscribe(
  //       data => this.newevent(),
  //       error => console.error(error))

  // }
  Method1(e, symbol) {
    if (e.target.checked) {
      let userid = 1;
      this.samplearr.push();
      let newportfolio = new Portfolio(userid, this.category, symbol);
      this.myportfolio.push(newportfolio);

      console.log(this.myportfolio);

    }
    else {
      this.myportfolio.splice(this.myportfolio.indexOf(symbol), 1);
      console.log("+new:" + this.myportfolio);
    }
  }
   applyFilter(filterValue: string) {
     this.dataSource = new MatTableDataSource(this.vall);  
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  i:number=0;
  savemethod() {

//alert("**)"+JSON.stringify(this.myportfolio));

  for(this.i;this.i<this.myportfolio.length;this.i++)
  {
    let sendone=this.myportfolio[this.i];
  
///alert("sendone"+JSON.stringify(sendone));
    let id = this.myportfolio[this.i].userid;
    let cat = this.myportfolio[this.i].cat;
    let symbol = this.myportfolio[this.i].symbol;

    let updatedportfolio = new Portfolio(id, cat, symbol);
 //alert("updatedportfolio"+JSON.stringify((updatedportfolio)));
this.listofportfolio.push(updatedportfolio);
//  alert("dfgjkh"+JSON.stringify((this.listofportfolio)));


  }
   this.nsestockService.savedetail(this.listofportfolio).subscribe(data => {
   this.getall();
})

  this.myRoute.navigate(["dashboard"]);
  
   }
    getall() {
    this.nsestockService.view()
      .subscribe(myportfolio => {
        this.myportfolio =myportfolio;
  
      })
  }
 

  //////////////////////

  all_list() {
    this.nsestockService.latestPrices1(this.category).subscribe(val => {
      console.log(this.vall);
      this.vall = val.data;
      //  console.log()
      this.dataSource=new MatTableDataSource(this.vall);
    })


  }

  /////////////////////////////

  

}
 
 




