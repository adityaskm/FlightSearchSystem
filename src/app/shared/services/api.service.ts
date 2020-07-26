import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Flight } from '../model/misc.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getFlightList(): Observable<Flight[]> {
    return this.http.get<Flight[]>(
      environment.apiUrl + 'advFlightSearch.json'
    );
  }
}
