import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {TaskServiceService} from 'src/app/task-service.service';
import {Task} from 'src/app/models/Task';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private _route: ActivatedRoute,private _router: Router , private _service:TaskServiceService) { }
  Tempid :number;
  Task : Task;
  ngOnInit() {
    // get  id from url
    this._route.paramMap.subscribe( params => {
      this.Tempid =+(params.get('id'));
      console.log(this.Tempid);
      this._service.GetTask(this.Tempid).subscribe(temp=>
        {
          // check if Task dont exist to direct notfound page
        if(temp==null){
          this._router.navigate(['no']);
        }
         this.Task=temp; 
        
      console.log(this.Task);
    
     });   
      
  });

}
}
