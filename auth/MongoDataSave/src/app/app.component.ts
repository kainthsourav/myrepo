import { Component,NgModule } from '@angular/core';
import { SaveRegisterDataService } from './save-register-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
email:String;
password:String;

 title = 'MongoDataSave';
 constructor(private MyService:SaveRegisterDataService)
 {

 }

  senddata()
  {
    if(this.email!=undefined && this.password!=undefined)
    {
   console.log(this.email);
   console.log(this.password);

   const data={
     email:this.email,
     password:this.password
   }
  this.MyService.savedata(data).subscribe(data1 =>{

    if(data1)
    {
      console.log(data1);
      alert("User Register Successfully");
    }
    });
}

else
{
   alert("Please Enter Email and Password");
}

}
}
