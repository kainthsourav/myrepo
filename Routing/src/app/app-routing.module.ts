import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
   //redirect 
   {
    path:'',redirectTo:'Home',pathMatch:'full'
  },
  {
    path:'AboutUs',component:AboutComponent
  },
  {
    path:'Home',component:HomeComponent
  },
  
  //Wildcard -When Page is not Found

  {
    path:"**",component:NotFoundComponent
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
