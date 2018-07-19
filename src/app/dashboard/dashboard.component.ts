
import { Component,ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Nsestock } from '../welcome/nsestock';
import {NsestockService} from '../welcome/nsestock.service';
import { ActivatedRoute } from '@angular/router';
import {Portfolio} from '../welcome/Portfolio';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  newvall1:Portfolio[]=[];
constructor(private nser: NsestockService) {
 }


  ngOnInit() {  
   //this.route.data.subscribe(newvall1 => console.log(newvall1));
//alert(this.route.snapshot.paramMap.get('id'));
// alert(JSON.stringify(this.newvall1));
// this.nser.view().subscribe(data=>{
// this.newvall1.push(data);

// });
 this.nser.view()
      .subscribe(myportfolio => {
        this.newvall1 =myportfolio;
      })
 this.getdashboard();
   
  }
 getdashboard() {
    this.nser.view()
      .subscribe(myportfolio => {
        this.newvall1 =myportfolio;

      })

       // alert("Get alert:"+JSON.stringify( this.newvall1));
  }

}