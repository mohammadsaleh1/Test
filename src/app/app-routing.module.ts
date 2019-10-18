import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { ListComponent } from './task/list/list.component';
import { NotfoundComponent } from './task/notfound/notfound.component';
import {HomeComponent } from './home/home.component'
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {'path':'viewDetail/:id',component:ViewTaskComponent},
  {'path':'list',component:ListComponent},
  {'path':'',component:HomeComponent},
  {'path':'sign',component:SingupComponent},
  {'path':"**",component:NotfoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
