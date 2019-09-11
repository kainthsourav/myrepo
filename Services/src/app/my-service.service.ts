import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  
  constructor() {

   }

  display(data)
  {
    alert(data.username);
  }
}
