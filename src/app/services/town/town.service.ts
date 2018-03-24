import {Injectable} from '@angular/core';
import {Town} from "../../classes/town";
import {Observable} from "rxjs/Observable";
import {HttpClient} from '@angular/common/http';


@Injectable()
export class TownService {
  apiURI: string = 'https://projet-blais.herokuapp.com/api/';
  townEndPoint: string = 'towns/';

  constructor(private http: HttpClient) {
  }

  getTowns(): Observable<Town[]> {
    return this.http.get<Town[]>(this.apiURI + this.townEndPoint);
  }

  getTown(id): Observable<Town> {
    return this.http.get<Town>(this.apiURI + this.townEndPoint + id);
  }
}
