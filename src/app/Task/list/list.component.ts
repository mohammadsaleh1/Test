import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSortable, } from '@angular/material';
import {TaskServiceService} from 'src/app/task-service.service';
import {Router} from '@angular/router';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['TaskDescription','CreateDate','Deadline','details','delete'];
  dataSource;
  temp;
  searchKey :string;


   
  constructor(private _service :TaskServiceService,private _route : Router) { }
  ngOnInit() {
 this._service.GetTasks().subscribe( temp =>
   {this.dataSource = new MatTableDataSource(temp);
 

  });

}
// dirct to detail that id
redirectToDetails(id:number){
this._route.navigate(['viewDetail',id],);
}
//delete Task that id 
redirectToDelete(id:number,dataSource){
  this._service.delete(id);
  this.dataSource = dataSource.data;
  }
  // filter the searh
applyFilter(){
  console.log(this.searchKey);
  this.dataSource.filter = this.searchKey.trim().toLowerCase();
}
}
