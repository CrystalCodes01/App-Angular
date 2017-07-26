import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    sendText(){
        return this.http.get(
          environment.apiBase + '/api').map((response:Response) => {
           return response.json();
        });
    }

}
