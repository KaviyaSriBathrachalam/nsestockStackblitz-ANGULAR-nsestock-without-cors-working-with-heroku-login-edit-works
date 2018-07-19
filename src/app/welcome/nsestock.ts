export class Nsestock {

    symbol: String;
   previousClose: number;
    ltP: number;
    ptsC: number
   
    constructor(symbol: String,
      previousClose: number,
      ltP: number, ptsC: number) {
      this.symbol = symbol;
      this.previousClose = previousClose;
      this.ltP = ltP;
      this.ptsC = ptsC;
    }
  }
  
  