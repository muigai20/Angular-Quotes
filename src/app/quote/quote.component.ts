import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Trevor Noah', 'Don’t worry about the world coming to an end today coz guess what, It’s already tomorrow in Australia.'),
    new Quote(2,'Amy Poehler','If People are talking behind your back, jus fart'),
    new Quote(3,'Vin Diesel','Dont Break someones heart,they only have one, break their bones,they have 206 of them'),
    new Quote(4,'Chris Rock','Accept who you are. Unless you are a serial killer'),
    new Quote(5,'Trevor Noah','Does America really need to the best at everything? You already dominate the world in economics, military power and obesity.'),
    new Quote(6,'Kevin Hart','I DON’T have EX’s! I have Y’s. Like ‘Y the hell did I date you?!'),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  constructor() { }

  ngOnInit() {
  }

}
