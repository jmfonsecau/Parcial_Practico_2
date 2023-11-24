import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private jsonUrl = 'https://gist.githubusercontent.com/t-montes/5ebece61782d6a06656b71a155ef0698/raw/2f50ca1a3d760da3535d2f374e84d7ea5193faa4/international-restaurants.json';

  constructor(private http: HttpClient) { }

  getRestaurantes(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
