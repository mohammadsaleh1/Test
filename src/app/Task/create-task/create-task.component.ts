import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/models/Task';
import { Categories } from 'src/app/models/Catgories';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { TaskServiceService } from 'src/app/task-service.service'
import { Router } from '@angular/router';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private parserFormatter: NgbDateParserFormatter, private modalService: NgbModal, public activeModal: NgbActiveModal, private _service: TaskServiceService, private Route: Router) {

  }
  dropdownList = [];
  selectedItems = [];
  numberinputs = 1;
  Task;
  dropdownSettings: IDropdownSettings;
  Catgories: Categories[];
  closeResult: string;
 
  // To add new sub task dinamcly
  add() {

    this.numberinputs += 1;
    console.log(this.Task.SubTask);
    this.Task.SubTask.push(" ");
  }

  ngOnInit() {
    // make setting to dropdown
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'color',
      textField: 'Name',

      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.Task = new Task();
    // intilaze for ng model form
    this.Task =
      {
        id: 0,
        Catgories: [{
          id: 1,
          Name: "eat",
          color: "red"
        }],
        TaskDescription: '',
        SubTask: ["task1"],
        CreateDate: null,
        EndDate: null,
      }
    this._service.GetCategories().subscribe(val => this.Catgories = val);
  }

 // add task to array in service and navigate to list
  SaveTask(Temp: Task) {

    Temp.CreateDate = this.parserFormatter.format(Temp.CreateDate);
    Temp.EndDate = this.parserFormatter.format(Temp.EndDate);
    this._service.SaveTask(Temp);
    this.Route.navigate(['list']);
    this.activeModal.close('Close click');
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  open(content) {
    console.log(content);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
