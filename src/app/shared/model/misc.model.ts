export type FlightType = 'ONE_WAY' | 'RETURN';

export interface Flight {
  arrivalTime: string;
  date: Date;
  departureTime: string;
  destination: string;
  flightNo: string;
  name: string;
  origin: string;
  price: number;
  duration: Date;
}

export interface FlightSearchData {
  origin: string;
  destination: string;
  departure: Date;
  return?: Date;
  passengers: number;
  flightType: FlightType;
}

export class LayoverFlight {
  private _flight1: Flight;
  public get flight1(): Flight {
    return this._flight1;
  }
  public set flight1(value: Flight) {
    this._flight1 = value;
    if (this.flight1 && this.flight2) {
      this.price = this.flight1.price + this.flight2.price;
    }
  }
  private _flight2: Flight;
  public get flight2(): Flight {
    return this._flight2;
  }
  public set flight2(value: Flight) {
    this._flight2 = value;
    if (this.flight1 && this.flight2) {
      this.price = this.flight1.price + this.flight2.price;
    }
  }
  price: number;
}

export type FlightDisplayList = (Flight | LayoverFlight)[];
