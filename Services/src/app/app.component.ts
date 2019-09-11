import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services';
  username:any;
  password:any;

  constructor(private MyServe:MyServiceService)
  {

  }
  
  dis()
  {
    if(this.username!=undefined || this.password!=undefined)
    {
   
        const data =
        {
          username : this.username,
          password : this.password
        }
    
     this.MyServe.display(data);

     alert("data sent to service");
    }
    else
    {
      alert("Please Fill All Infomation");
    }
  }
}
