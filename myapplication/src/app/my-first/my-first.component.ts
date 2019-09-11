import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-first',
  // template:'<div>Inline Template {{name}} <br> <input type="text"></div>',
  templateUrl: './my-first.component.html',
   styleUrls: ['./my-first.component.css']
 
})
export class MyFirstComponent implements OnInit {

  name:any="Kainth Sourav";

  constructor() { }
    
  ngOnInit() {
    
  }

}
