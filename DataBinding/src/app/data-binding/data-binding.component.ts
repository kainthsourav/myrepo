import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

 public MyID="Sourav";

public hasError=false;

 public changecolor="text-change";
 public changecolor_1="redColor";

//  Cssclas:CssClass=new CssClass();

  constructor() { }

  ngOnInit() {
  }
  public change()
  {
    if(this.hasError==false)
    {
      this.hasError=true;
    }
    else
    {
      this.hasError=false;
    }

  }
  public KeyFun(Event:any)
  {
    if(this.hasError==false)
    {
      this.hasError=true;
    }
    else
    {
      this.hasError=false;
    }
  }

}
// class CssClass
// {
//   red:boolean=true;
//   size20:boolean=true;
// }
