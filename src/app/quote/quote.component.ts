import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Frank Zappa', 'So many books,so little time','This Quote was submitted by',new Date(2007,6,14)),
    new Quote(2,'Amy Poehler','If People are talking behind your back, jus fart','This Quote was submitted by',new Date(2019,4,9)),
    new Quote(3,'Oscar Wilde','Be yourself; everyone else is already taken','This Quote was submitted by',new Date(2019,6,1)),
    new Quote(4,'Dr.Sus','Do not cry because it is over,smile because it happened.','This Quote was submitted by',new Date(2019,3,23)),
    new Quote(5,'Trevor Noah','Does America really need to the best at everything? You already dominate the world in economics, military power and obesity.','This Quote was submitted by',new Date(2019,1,21)),
    new Quote(6,'Kevin Hart','The road is long,but i must finish and I know','This Quote was submitted by',new Date(2018,8,6)),
  ];
  toggleDetails(index){
   this.quotes[index].showDescription = !this.quotes[index].showDescription;
 }
 addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

 completeQuote(isComplete, index){
  if (isComplete) {
    this.quotes.splice(index,1);
  }
}
deleteQuote(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}
  constructor() { }

  ngOnInit() {
  }

}