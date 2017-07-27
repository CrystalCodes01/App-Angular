import { Component, OnInit } from '@angular/core';
import {HttpService} from "./http.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css'],
  providers: [HttpService]
})
export class SmsComponent {
    isShowingMessage: boolean = false;
    backMessage;
  constructor(private _http: HttpService) { }

    sendText(){
        console.log("Sending text message....");
        this.isShowingMessage = !this.isShowingMessage;
        this._http.sendText()
            .subscribe((data) => {
                this.backMessage = data;
                console.log(this.backMessage);
            }, error => console.log(error));

  }

}
