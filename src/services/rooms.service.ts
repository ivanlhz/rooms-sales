import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomRequest } from 'src/interfaces/roomRequest';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private apiUrl = 'http://api.verychic.com/verychic-endpoints/v1/products.json?language=fr&currency=EUR&detailed=false&publishingStatus=nonexpired&size=3';

  constructor(public http: HttpClient) {}

  get(): Observable<RoomRequest> {
    return this.http.get<RoomRequest>(this.apiUrl);
  }
}
