import {Forecast} from "./forecast";

export class Town {
  constructor(
    public id: number,
    public name: string,
    public latitude: number = undefined,
    public longitude: number = undefined,
    public forecast: Forecast = undefined
  ) {};
}
