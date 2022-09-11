import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn:'root'
})
export class TestesService{
    constructor(
      private http:HttpClient
    ){}

    get():Observable<any>{
      return this.http.get('http://localhost:3000/private/home');
    }
}
