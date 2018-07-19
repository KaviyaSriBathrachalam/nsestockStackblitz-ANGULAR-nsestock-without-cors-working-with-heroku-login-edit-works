
import { Portfolio } from '../welcome/Portfolio';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//  import { Rx } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { NsestockService } from '../welcome/nsestock.service';
import { map } from 'rxjs/operators';
// import 'rxjs/Rx';
// import { Observable } from "rxjs/Rx"

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
url1 = "http://localhost:9090/api/portfolio";
  constructor(private http: Http) { }
  view() {
    return this.http.get(this.url1 + "/get").pipe(map(res => res.json()));
  }
}