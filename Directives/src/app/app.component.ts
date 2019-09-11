import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
  show:boolean=true;
  Element="Urvi";
  colors:any [] = [
    {sr: 0, name: "Kainth"},
    {sr: 1, name: "Sourav"},
    {sr: 2, name: "Himi"},
    {sr: 3, name: "Urvi"},
    {sr: 4, name: "Shivam"}, 
];
  color=["Red","Yellow","White","Blue"];
  Employee:any [];

  constructor()
  {
    this.Employee=[
      {
        sr:0,
        name:"Sourav",
        Gender:"Male",
        Department:"CSE"

      },

      {
        sr:1,
        name:"Kainth",
        Gender:"Male",
        Department:"CSE"

      },

      {
        sr:2,
        name:"Himi",
        Gender:"Female",
        Department:"CSE"
      },

      {
        sr:3,
        name:" Al ul Urvi Samosa Rehman",
        Gender:"Pakistani",
        Department:"Jaish-e-Mohammad"
      },

      {
        sr:3,
        name:" Suganya Dosa Poha",
        Gender:"NorthIndian Hater",
        Department:"CSE"
      },
    ]
  }
  birthday=new Date(1995,3,15);
 
  Name="Sourav Kainth";
  Address="Jalandhar";
  Salary=50000;
  DOJ=new Date(26,5,2019);
  DOR=new Date(22,3,2050);
  Per=76.5;
}

