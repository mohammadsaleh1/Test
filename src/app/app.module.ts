import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import {MatIconModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListComponent } from './task/list/list.component';
import {  MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotfoundComponent } from './task/notfound/notfound.component';
import { NgxSpinnerModule  } from "ngx-spinner";
import { HomeComponent } from './home/home.component';
import { SingupComponent } from './singup/singup.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    NavbarComponent,
    ViewTaskComponent,
    ListComponent,
    NotfoundComponent,
    HomeComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,  
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    NgxSpinnerModule ,
    ReactiveFormsModule

  ],
  providers: [BrowserAnimationsModule],
  bootstrap: [AppComponent],
  entryComponents : [CreateTaskComponent]
})
export class AppModule { }
