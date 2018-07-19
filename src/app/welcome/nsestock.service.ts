import { Portfolio } from './Portfolio';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
// import {Observable} from 'rxjs/Observable';

@Injectable()
export class NsestockService {
  private headers = new Headers({ 'Content-Type': 'application/json' });


  // eventUrl = "https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyStockWatch.json";
  // url = "https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/";


  eventUrl = "https://nsestock-wtout-cors-login-edit.herokuapp.com/api/portfolio/category/"; 

  //will be inside pipeline named nsestockpaipu
  //go to staging nsestock-wtout-cors-login-edit and then deploy

  constructor(private http: Http) { }
  // url1 = "http://localhost:9090/api/portfolio";

  latestPrices() {
    
    return this.http.get(this.eventUrl).pipe(
      map(res => res.json()));
  }
  latestPrices1(category) {
    //alert(category);
    return this.http.get(this.eventUrl + category).pipe(
      map(res => res.json()));
  }
  new:String[];
      savedetail(obj: Portfolio[]) {
            return this.http.post("http://localhost:9090/api/portfolio/post",obj).pipe(
                map(res => res.json()));

  }
//   updateEvent(id, obj){

//     console.log("Id value "+JSON.stringify(id));
// let body = JSON.stringify(obj);            
//         let headers = new Headers({ 'Content-Type': 'application/json' });
//         let options = new RequestOptions({ headers: headers });

//     return this.http.put(this.url1+"/put/"+id,body, options)
//         .map(res => res.json());

        
//   }
  view() {
    return this.http.get( "http://localhost:9090/api/portfolio/get").pipe(
      map(res => res.json()));
  }
    }
