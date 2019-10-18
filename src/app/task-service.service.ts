import { Injectable } from '@angular/core';
import { Task } from './models/Task';
import { Observable, of } from 'rxjs';
import { Categories } from './models/Catgories';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

Task : Task[] =[{
  id:1,
  TaskDescription:"Create An Task with Modal",
  Catgories : [{
    id:1,
    Name : "eat",
    color : "red"
   }],
CreateDate: new Date(),
EndDate : new Date(),

SubTask:["Task1","task2"],
},
];


Catgories:Categories[]=[
  {
   id:1,
   Name : "eat",
   color : "red"
  },
  {
    id:2,
    Name : "GoHome",
   color : "Green"
  },
  {
    id:3,
    Name : "Loginpage",
   color : "blue"
  }

 ];
i=3;
// save Task
SaveTask(Temp:Task)
{
   console.log(Temp);
   
   if(Temp.id==0){
     Temp.id= this.i;
     this.i = this.i+1;
   this.Task.push(Temp);
   console.log(this.Task);

   }
}
// Get All Task
GetTasks():Observable<Task[]>{
return of(this.Task);
}
// Get task with id 
GetTask(id:number):Observable<Task> {
  
 var Ts=this.Task.find(idt =>id ==idt.id);
 var index = this.Task.indexOf(Ts);

  return of(this.Task.find(idt =>id ==idt.id));
}
// Delete Task
delete(id :number){
  var Ts = this.Task.find(idt => id === idt.id);
  var index = this.Task.indexOf(Ts);
  if(index > -1){
    this.Task.splice(index,1);
}
}
GetCategories():Observable<Categories[]>{
  return of(this.Catgories);
}

  constructor() { }
  
}
