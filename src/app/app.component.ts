import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Injectable()
export class AppComponent {

  constructor(private http: HttpClient , private titleService: Title) {
    this.titleService.setTitle("Chatbot");
  }
  curentdate=new Date();
  qest="";
  response = '';
  title = 'chatbotProject';
    dataSource: any[] = [];

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
  }

  repondre(){

    const data1={ qst: '', rep: '',date:new Date()};
    this.http.post<any>("http://127.0.0.1:5000/send", {text:this.qest}).subscribe(data => {
      data1.rep=data.response
    })
    data1.qst=this.qest;
    this.dataSource.push(data1);
    this.qest="";

  }
  }


