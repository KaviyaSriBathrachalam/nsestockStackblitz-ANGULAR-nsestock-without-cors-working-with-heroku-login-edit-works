import {Nsestock} from'./Nsestock';
export class Portfolio {
  userid:number;
  cat:String;
  symbol: String;
  

  constructor( userid:number,cat:String,
  symbol: String ){
    this.userid=userid;
    this.cat=cat;
    this.symbol=symbol;
    
  }
}
///////////////////////////////////////
export class Portfolio1 {
  
  cat:String;
  
  nse:Nsestock;

  constructor( cat:String,
  nse: Nsestock){
    
    this.cat=cat;
    
    this.nse=nse;
  }
}
//////////////////////////////
export class Saample{
  cat:String;
  symbol:String;

}
