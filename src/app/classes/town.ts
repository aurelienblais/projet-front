import {Weather} from "./weather";

export class Town {
  constructor(
    public id: number,
    public name: string,
    public latitude: number,
    public longitude: number,
    public weather: Weather
  ) {};
}
