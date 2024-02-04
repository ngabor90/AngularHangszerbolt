import { Component } from '@angular/core';

@Component({
  selector: 'app-kerdesek',
  templateUrl: './kerdesek.component.html',
  styleUrls: ['./kerdesek.component.css']
})
export class KerdesekComponent {
  n:string = "";
  e:string = "";
  m:string = "";
  q:string = "";

  questions:Question[] = [];

  ask():void{
    var currentQuestion:Question = {
      name: this.n,
      email: this.e,
      mobile: this.m,
      question: this.q
    };
    
  this.questions.push(currentQuestion);

  this.n = "";
  this.e = "";
  this.m = "";
  this.q = "";
  }
}

export interface Question{
    name:string;
    email:string;
    mobile:string;
    question:string;
}
