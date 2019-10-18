import { Component, OnInit } from '@angular/core';
import {CreateTaskComponent} from '../task/create-task/create-task.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService : NgbModal) { }

  ngOnInit() {
 
  }
  open() {
    const modalRef = this.modalService.open(CreateTaskComponent);
    modalRef.componentInstance.custom = -1;
  
  
  }
  
}
