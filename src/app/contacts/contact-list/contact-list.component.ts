import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  allTheQuotes: object[] = [
    {
      text: 'Haney',
      phone: '+13136106987'
    },
    {
      text: 'Edward',
      phone: '+13124021551'
    },
    {
      text: 'Nik',
      phone: '+17039018334'
    },
    {
      text: 'Blake',
      phone: '+16784711521'
    },
    {
      text: 'Crystal',
      phone: '+13142784979'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  doSomething(theQuote) {
    const quoteIndex = this.allTheQuotes.indexOf(theQuote);
    this.allTheQuotes.splice(quoteIndex, 1);
  }
}
