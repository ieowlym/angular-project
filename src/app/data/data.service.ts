import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getClients(): Observable<any> {
        return this.http.get<any>('http://localhost:3000/clients');
    }
    
}